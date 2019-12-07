import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FaChevronLeft, FaChevronRight, FaSpinner } from 'react-icons/fa';
import api from '../../services/api';

import Container from '../../components/Container';
import Copyrights from '../../components/Copyrights';
import {
  Loading,
  Owner,
  IssueList,
  IssueTitle,
  IssueSelection,
  PageActions,
} from './styles';

export default class Repository extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        repository: PropTypes.string,
      }),
    }).isRequired,
  };

  state = {
    repository: {},
    issues: [],
    loading: true,
    filters: [
      { state: 'all', label: 'Todas', active: true },
      { state: 'open', label: 'Abertas', active: false },
      { state: 'closed', label: 'Fechadas', active: false },
    ],
    filterIndex: 0,
    page: 1,
  };

  async componentDidMount() {
    const { match } = this.props;
    const { filters } = this.state;

    const repoName = decodeURIComponent(match.params.repository);

    const [repository, issues] = await Promise.all([
      api.get(`/repos/${repoName}`),
      api.get(`/repos/${repoName}/issues`, {
        params: {
          state: filters.find(fil => fil.active).state,
          per_page: 5,
        },
      }),
    ]);

    this.setState({
      repository: repository.data,
      issues: issues.data,
      loading: false,
    });
  }

  loadIssues = async () => {
    const { match } = this.props;
    const { filters, filterIndex, page } = this.state;

    const repoName = decodeURIComponent(match.params.repository);

    const response = await api.get(`/repos/${repoName}/issues`, {
      params: {
        state: filters[filterIndex].state,
        per_page: 5,
        page,
      },
    });

    this.setState({ issues: response.data });
  };

  handleFilter = async filterIndex => {
    await this.setState({ filterIndex, page: 1 });
    this.loadIssues();
  };

  handlePage = async action => {
    const { page } = this.state;
    await this.setState({
      page: action === 'back' ? page - 1 : page + 1,
    });
    this.loadIssues();
  };

  render() {
    const {
      repository,
      issues,
      loading,
      filters,
      filterIndex,
      page,
    } = this.state;

    if (loading) {
      return (
        <Loading>
          <FaSpinner color="#fff" size={24} />
        </Loading>
      );
    }

    return (
      <>
        <Container>
          <Owner>
            <Link to="/">
              <FaChevronLeft color="#FFF" size={14} />
              Voltar aos repositórios
            </Link>
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <h1>{repository.name}</h1>
            <p>{repository.description}</p>
          </Owner>

          <IssueList>
            <IssueTitle>Filtrar questões do repositório</IssueTitle>
            <IssueSelection active={filterIndex}>
              {filters.map((filter, index) => (
                <div key={filter.label}>
                  <button
                    type="button"
                    onClick={() => this.handleFilter(index)}
                  >
                    {filter.label}
                  </button>
                </div>
              ))}
            </IssueSelection>

            {issues.map(issue => (
              <li key={String(issue.id)}>
                <img src={issue.user.avatar_url} alt={issue.user.login} />
                <div>
                  <strong>
                    <a
                      href={issue.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {issue.title}
                    </a>
                    {issue.labels.map(label => (
                      <span key={String(label.id)}>{label.name}</span>
                    ))}
                  </strong>
                  <p>{issue.user.login}</p>
                </div>
              </li>
            ))}
          </IssueList>
          <PageActions>
            <button
              type="button"
              disabled={page < 2}
              onClick={() => this.handlePage('back')}
            >
              <FaChevronLeft color="#e84c58" size={18} />
            </button>
            <span>Página {page}</span>
            <button type="button" onClick={() => this.handlePage('next')}>
              <FaChevronRight color="#e84c58" size={18} />
            </button>
          </PageActions>
        </Container>
        <Copyrights />
      </>
    );
  }
}
