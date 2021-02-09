import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import PageButtons from '../../components/PageButtons';
import RankingElement from '../../components/RankingElement';
import api from '../../services/api';

import { Container, PageSelect } from './styles';

const Ranking = () => {
  const [tests, setTests] = useState([]);
  const [pages, setPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const history = useHistory();

  const handleMenu = useCallback(() => {
    history.push('/menu');
  }, [history]);

  useEffect(() => {
    let isMounted = true;

    api.get(`/tests/${currentPage}`).then((response) => {
      if (isMounted) {
        setTests(response.data.tests);
        setPages(Math.ceil(response.data.count / 5));
      }
    });

    return () => {
      isMounted = false;
    };
  }, [currentPage]);

  return (
    <Container>
      <h1>Ranking</h1>

      {tests.map((test) => (
        <RankingElement key={test.id} test={test} />
      ))}

      <PageSelect>
        <PageButtons
          pages={pages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </PageSelect>
      <button type="button" onClick={handleMenu}>
        Voltar ao menu
      </button>
    </Container>
  );
};

export default Ranking;
