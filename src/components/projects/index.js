import React, { Component } from 'react';
import Center from './center';
import Project from './project';
import ProjectsDetails from './project-details';
import projects from './projectsList';
import './styles.scss';

class Projects extends Component {

  state = { showDetailsModal: true, project: null };
  sectionRef = React.createRef();

  componentDidMount() {
    const { onGetSectionRef } = this.props;
    onGetSectionRef(this.sectionRef);
  }

  showDetails = i => {
    const project = projects[i];
    this.setState({ showDetailsModal: true, project });
  }

  hideDetails = () => this.setState({ showDetailsModal: false });

  renderProjects() {
    return projects.map((project, i) => (
      <Project
        key={`project-${i+1}`}
        className="project"
        name={project.title}
        onClick={() => this.showDetails(i)}
      />
    ));
  }

  renderProjectsDetails() {
    const { showDetailsModal, project } = this.state;
    if (showDetailsModal) {
      return <ProjectsDetails onExit={this.hideDetails} {...{ project }} />
    }
    return null;
  }

  render() {

    return (
      <div ref={this.sectionRef} className="projects-page">
        <Center />
        {this.renderProjects()}
        {this.renderProjectsDetails()}
      </div>
    );
  }

}

export default Projects;
