import React, {useEffect} from 'react';
import Table from '../../components/Table';
import {useDispatch, useSelector} from 'react-redux';
import {fetchAffairs} from './actions';
import application from '../../config/application';

const AffairsPage = () => {
  const affairsState = useSelector(
      (globalState) => globalState.affairs,
  );
  const {loading, initialyFetched, affairs} = affairsState.toJS();

  const dispatch = useDispatch();
  useEffect(() => {
    if (!initialyFetched && !loading) {
      dispatch(fetchAffairs());
    }
  }, [dispatch, initialyFetched, loading]);

  return (
    <Table
      data={affairs}
      isLoading={loading}
      title='Affairs'
      columns={application.affairs}/>
  );
};

export default AffairsPage;
