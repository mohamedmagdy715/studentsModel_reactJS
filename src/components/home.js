import Search from '../containers/search'
import StudentsList from '../containers/students-list'

export const Home = ({history})=> {
    return (
      <div>
        <Search />
        <StudentsList history={history} />
      </div>
    );
  }