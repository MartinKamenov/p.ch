import React, {useEffect} from 'react';
import Table from '../../components/Table';
import {useDispatch, useSelector} from 'react-redux';
import {fetchCouncillors} from './actions';
import application from '../../config/application';

const CouncillorsPage = () => {
  const councillorsState = useSelector(
      (globalState) => globalState.councillors,
  );
  const {loading, initialyFetched, councillors} = councillorsState.toJS();

  const dispatch = useDispatch();
  useEffect(() => {
    if (!initialyFetched && !loading) {
      dispatch(fetchCouncillors());
    }
  }, [dispatch, initialyFetched, loading]);

  return (
    <Table
      data={councillors}
      isLoading={loading}
      title='Councillors'
      columns={application.concillors}/>
  );
};

export default CouncillorsPage;
