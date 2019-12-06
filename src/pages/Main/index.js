import React, { Component } from 'react';
import { FaGithubAlt, FaPlus, FaSpinner, FaEye, FaCheck } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import Container from '../../components/Container';
import { Form, SubmitButton, List, ErrorMessage } from './styles';

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

  render() {
    const { newRepo, repositories, loading, error } = this.state;

    return (
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

          <SubmitButton loading={loading ? 1 : 0}>
            {loading ? (
              <FaSpinner color="#ec536c" size={14} />
            ) : (
              <FaPlus color="#ec536c" size={14} />
            )}
          </SubmitButton>
        </Form>
        <ErrorMessage>
          <span>{error ? 'Ops! Algo está errado.' : undefined}</span>
        </ErrorMessage>

        <List>
          {repositories.map(repository => (
            <li key={repository.name}>
              <FaCheck color="#FFF" size={14} />
              <span>{repository.name}</span>
              <Link to={`/repository/${encodeURIComponent(repository.name)}`}>
                <FaEye color="#FFF" size={18} />
              </Link>
            </li>
          ))}
        </List>
      </Container>
    );
  }
}
