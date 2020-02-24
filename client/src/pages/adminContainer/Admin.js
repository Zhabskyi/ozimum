import { connect } from 'react-redux';
import { getIfLoading } from '../../store/data';

import Admin from '../admin/Admin';

const mapDispatchToProps = dispatch => ({
  
});

const mapStateToProps = state => {
  return {
    loading: getIfLoading(state)
  };
};

const AdminContainer = connect(mapStateToProps, mapDispatchToProps)(Admin);

export default AdminContainer;
