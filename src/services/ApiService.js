import fetch from 'isomorphic-fetch';

class ApiService {

  constructor(token) {
    this.options = {
      method: 'GET',
      headers: {
        'Authorization': `Basic ${token}`,
      },
    };
  }

  parseJson(response) {
    return response.json();
  }

  // login
  static tryLogin(token) {
    return fetch('/api/users/me', {
      method: 'GET',
      headers: {
        'Authorization': `Basic ${token}`,
      },
    });
  }

// profile
  fetchProfile() {
    return fetch('/api/users/me/personalDetails', this.options)
      .then(this.parseJson);
  }

  updateProfile(profileData) {
    return fetch('/api/users/me/personalDetails', {
      ...this.options,
      method: 'PUT',
      body: profileData,
    })
      .then(this.parseJson);
  }

// skills
  fetchSkillCategories() {
    return fetch('/api/skillCategories', this.options)
      .then(this.parseJson);
  }

  updateSkillCategory(skillCategoryData) {
    return fetch('/api/skillCategories', {
      ...this.options,
      method: 'POST',
      body: skillCategoryData,
    })
      .then(this.parseJson);
  }

  fetchSkills() {
    return fetch('/api/users/me/skills', this.options)
      .then(this.parseJson);
  }

  updateSkill(id, skillData) {
    return fetch(`/api/users/me/skills/${id}`, {
      ...this.options,
      method: 'PUT',
      body: skillData,
    })
      .then(this.parseJson);
  }

  addSkill() {
    return fetch('/api/users/me/skills', {
      ...this.options,
      method: 'POST',
    })
      .then(this.parseJson);
  }

  deleteSkill(id) {
    return fetch(`/api/users/me/skills/${id}`, {
      ...this.options,
      method: 'DELETE',
    })
      .then(this.parseJson);
  }

// experience
  fetchAllExperiences() {
    return fetch('/api/users/me/experience', this.options)
      .then(this.parseJson);
  }

  addExperience() {
    return fetch('/api/users/me/experience', {
      ...this.options,
      method: 'POST',
    })
      .then(this.parseJson);
  }

  updateExperience(id, experienceData) {
    return fetch(`/api/users/me/experience/${id}`, {
      ...this.options,
      method: 'PUT',
      body: experienceData,
    })
      .then(this.parseJson);
  }

  deleteExperience(id) {
    return fetch(`/api/users/me/experience/${id}`, {
      ...this.options,
      method: 'DELETE',
    })
      .then(this.parseJson);
  }

  // projects
  fetchAllProjects() {
    return fetch('/api/users/me/projects', this.options)
      .then(this.parseJson);
  }

  addProject() {
    return fetch('/api/users/me/projects', {
      ...this.options,
      method: 'POST',
    })
      .then(this.parseJson);
  }

  updateProject(id, projectData) {
    return fetch(`/api/users/me/projects/${id}`, {
      ...this.options,
      method: 'PUT',
      body: projectData,
    })
      .then(this.parseJson);
  }

  deleteProject(id) {
    return fetch(`/api/users/me/projects/${id}`, {
      ...this.options,
      method: 'DELETE',
    })
      .then(this.parseJson);
  }

  // certifications
  fetchAllCertifications() {
    return fetch('/api/users/me/certifications', this.options)
      .then(this.parseJson);
  }

  addCertification() {
    return fetch('/api/users/me/certifications', {
      ...this.options,
      method: 'POST',
    })
      .then(this.parseJson);
  }

  updateCertification(id, certificationData) {
    return fetch(`/api/users/me/certifications/${id}`, {
      ...this.options,
      method: 'PUT',
      body: certificationData,
    })
      .then(this.parseJson);
  }

  deleteCertification(id) {
    return fetch(`/api/users/me/certifications/${id}`, {
      ...this.options,
      method: 'DELETE',
    })
      .then(this.parseJson);
  }

  // education
  fetchAllEducation() {
    return fetch('/api/users/me/education', this.options)
      .then(this.parseJson);
  }

  addEducation() {
    return fetch('/api/users/me/education', {
      ...this.options,
      method: 'POST',
    })
      .then(this.parseJson);
  }

  updateEducation(id, educationData) {
    return fetch(`/api/users/me/education/${id}`, {
      ...this.options,
      method: 'PUT',
      body: educationData,
    })
      .then(this.parseJson);
  }

  deleteEducation(id) {
    return fetch(`/api/users/me/education/${id}`, {
      ...this.options,
      method: 'DELETE',
    })
      .then(this.parseJson);
  }

  // languages
  fetchAllLanguages() {
    return fetch('api/users/me/languages', this.options)
      .then(this.parseJson);
  }

  addLanguage() {
    return fetch('/api/users/me/languages', {
      ...this.options,
      method: 'POST',
    })
      .then(this.parseJson);
  }

  updateLanguage(id, languageData) {
    return fetch(`/api/users/me/languages/${id}`, {
      ...this.options,
      method: 'PUT',
      body: languageData,
    })
      .then(this.parseJson);
  }

  deleteLanguage(id) {
    return fetch(`/api/users/me/languages/${id}`, {
      ...this.options,
      method: 'DELETE',
    })
      .then(this.parseJson);
  }
}

export default ApiService;
