import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getGitHubRepos } from '../../actions/profile'
import Spinner from '../layout/Spinner';

const ProfileGithub = ({username,getGitHubRepos, repos}) => {
  useEffect(() => {
    getGitHubRepos(username);
  },[getGitHubRepos]);

  return (
    <div className='profile-github'>
      <h2 class="text-primary my-1">
        <i class="fab fa-github"></i> Github Repos
      </h2>
      {repos === null ? <Spinner/> : (
        repos.map((repo,index)=> (
          <div key={repo._id} class="repo bg-white my-1 p-1">
          <div>
              <h4><a href={repo.html_url} target="_blank" rel='noopener noreferrer'>{repo.name}</a></h4>
              <p>
                {repo.description}
              </p>
            </div>
            <div>
              <ul>
                <li class="badge badge-primary">Stars: {repo.stargazers_count}</li>
                <li class="badge badge-dark">Watchers: {repo.watchers_count}</li>
                <li class="badge badge-light">Forks: {repo.forks_count}</li>
              </ul>
            </div>

          </div>
        ))
      )}
    </div>
  )
}

ProfileGithub.propTypes = {
  getGitHubRepos: PropTypes.func.isRequired,
  repos:PropTypes.array.isRequired,
  username: PropTypes.string.isRequired
}

const mapStateToProps = state => ({
  repos : state.profile.repos
})

export default connect(mapStateToProps, {getGitHubRepos})(ProfileGithub); 