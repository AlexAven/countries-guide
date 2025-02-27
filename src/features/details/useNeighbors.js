import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { loadNeighbors, selectNeighbors } from './detailsSlice';

const useNeighbors = (borders = []) => {
  const dispatch = useDispatch();
  const neighbors = useSelector(selectNeighbors);

  useEffect(() => {
    if (borders.length) {
      dispatch(loadNeighbors(borders));
    }
  }, [borders, dispatch]);

  return neighbors;
};

export default useNeighbors;
