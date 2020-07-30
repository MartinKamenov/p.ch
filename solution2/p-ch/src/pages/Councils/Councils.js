import React, {useEffect} from 'react';
import Table from '../../components/Table';
import {useDispatch, useSelector} from 'react-redux';
import {fetchCouncils} from './actions';
import application from '../../config/application';

const CouncilsPage = () => {
  const councilsState = useSelector(
      (globalState) => globalState.councils,
  );
  const {loading, initialyFetched, councils} = councilsState.toJS();

  const dispatch = useDispatch();
  useEffect(() => {
    if (!initialyFetched && !loading) {
      dispatch(fetchCouncils());
    }
  }, [dispatch, initialyFetched, loading]);

  return (
    <Table
      data={councils}
      isLoading={loading}
      title='Councils'
      columns={application.concils}/>
  );
};

export default CouncilsPage;
