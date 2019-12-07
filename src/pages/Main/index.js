import React, { Component } from 'react';
import {
  FaGithubAlt,
  FaPlus,
  FaSpinner,
  FaEye,
  FaCheck,
  FaTrashAlt,
  FaBroom,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';

import api from '../../services/api';

import Container from '../../components/Container';
import Copyrights from '../../components/Copyrights';

import { Form, SubmitButton, CleanButton, List, ErrorMessage } from './styles';

export default class Main extends Component {
  state = {
    newRepo: '',
    repositories: [],
    loading: false,
    error: null,
  };

  // Carregar os dados do localStorage
  componentDidMount() {
    const repositories = localStorage.getItem('repositories');

    if (repositories) {
      this.setState({ repositories: JSON.parse(repositories) });
    }
  }

  // Salvar os dados no localStorage
  componentDidUpdate(_, prevState) {
    const { repositories } = this.state;

    if (prevState.repositories !== repositories) {
      localStorage.setItem('repositories', JSON.stringify(repositories));
    }
  }

  handleInputChange = e => {
    this.setState({ newRepo: e.target.value, error: null });
  };

  handleSubmit = async e => {
    e.preventDefault();

    this.setState({ loading: true, error: false });

    try {
      const { newRepo, repositories } = this.state;

      newRepo.toLowerCase();

      if (newRepo === '') throw Error('Você precisa informar um repositório.');

      const hasRepo = repositories.find(repo => repo.name === newRepo);

      if (hasRepo) throw Error('Este repositório já foi informado.');

      const response = await api.get(`/repos/${newRepo}`);

      const data = {
        name: response.data.full_name,
      };

      this.setState({
        repositories: [...repositories, data],
        newRepo: '',
      });
    } catch (error) {
      this.setState({ error: true });
    } finally {
      this.setState({ loading: false });
    }
  };

  handleDelete = item => {
    const { repositories } = this.state;

    this.setState({
      repositories: repositories.filter(repo => repo !== item),
    });
  };

  handleClean = () => {
    const { repositories } = this.state;
    this.setState({ loading: true });

    this.setState({
      repositories: repositories.splice(0, 0),
      loading: false,
    });
  };

  render() {
    const { newRepo, repositories, loading, error } = this.state;

    return (
      <>
        <Container>
          <h1>
            <FaGithubAlt />
            Repositórios
          </h1>

          <Form onSubmit={this.handleSubmit} error={error}>
            <input
              type="text"
              placeholder="Adicionar repositório"
              value={newRepo}
              onChange={this.handleInputChange}
            />

            <SubmitButton data-tip data-for="addRepo" loading={loading ? 1 : 0}>
              {loading ? (
                <FaSpinner color="#ec536c" size={14} />
              ) : (
                <FaPlus color="#ec536c" size={14} />
              )}
              <ReactTooltip id="addRepo" type="light" effect="solid">
                Adicionar repositório
              </ReactTooltip>
            </SubmitButton>

            <CleanButton
              data-tip
              data-for="cleanRepo"
              onClick={this.handleClean}
              loading={loading ? 1 : 0}
            >
              {loading ? (
                <FaSpinner color="#ec536c" size={14} />
              ) : (
                <FaBroom color="#ec536c" size={14} />
              )}
              <ReactTooltip id="cleanRepo" type="light" effect="solid">
                Limpar todos repositórios
              </ReactTooltip>
            </CleanButton>
          </Form>
          <ErrorMessage>
            <span>{error ? 'Ops! Algo está errado.' : undefined}</span>
          </ErrorMessage>

          <List>
            {repositories.map(repository => (
              <li key={repository.name} value={repositories}>
                <FaCheck color="#FFF" size={14} />
                <span>{repository.name}</span>
                <Link
                  data-tip
                  data-for="viewRepo"
                  to={`/repository/${encodeURIComponent(repository.name)}`}
                >
                  <FaEye color="#FFF" size={18} />
                </Link>
                <ReactTooltip id="viewRepo" type="light" effect="solid">
                  Visualizar repositório
                </ReactTooltip>
                <button
                  data-tip
                  data-for="removeRepo"
                  type="button"
                  title="Remover todos os repositórios"
                  onClick={() => this.handleDelete(repository)}
                >
                  <FaTrashAlt color="#FFF" size={18} />
                </button>
                <ReactTooltip id="removeRepo" type="light" effect="solid">
                  Remover repositório
                </ReactTooltip>
              </li>
            ))}
          </List>
        </Container>
        <Copyrights />
      </>
    );
  }
}
