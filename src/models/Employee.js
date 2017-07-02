import { observable, action } from 'mobx';
import { browserHistory } from 'react-router';

class Employee {
  @observable profile = {};

  @observable skills = {};
  @observable skillsCategories = [];
  @observable mySkillsList = [];

  @observable experience = {};
  @observable experienceList = [];

  @observable projects = {};

  @observable certifications = {};

  @observable education = {};

  @observable languages = {};
  @observable languagesList = [];

  @observable apiService;

  constructor(apiService) {
    this.apiService = apiService;
  }

  @action populateEmployee = () => {
    this.getProfile();
    this.getSkillCategories();
    this.getSkills();
    this.getAllExperience();
    this.getAllProjects();
    this.getAllCertifications();
    this.getAllEducation();
    this.getAllLanguages();
  }

  // profile
  @action getProfile = () => {
    this.apiService.fetchProfile()
      .then((response) => {
        this.profile = response;
      });
  }

  @action updateProfile = (profileData) => {
    this.apiService.updateProfile(profileData)
      .then((response) => {
        this.profile = response;
      });
  }

  // skills
  @action getSkillCategories = () => {
    this.apiService.fetchSkillCategories()
      .then((response) => {
        this.skillsCategories = response;
      });
  }

  @action updateSkillCategory = () => {
    this.apiService.updateSkillCategory()
      .then((response) => {
        this.skills = response;
      });
  }

  @action getSkills = () => {
    this.apiService.fetchSkills()
      .then((response) => {
        this.mySkillsList = response;
      });
  }

  @action updateSkill = (id, skillData) => {
    this.apiService.updateSkill(id, skillData)
      .then((response) => {
        this.skills = response;
      });
  }

  @action addSkill = () => {
    this.apiService.fetchSkills()
      .then((response) => {
        this.skills = response;
      });
  }

  @action deleteSkill = (id) => {
    this.apiService.deleteSkill(id)
      .then((response) => {
        this.skills = response;
      });
  }

  // experience
  @action getAllExperience = () => {
    this.apiService.fetchAllExperiences()
      .then((response) => {
        this.experienceList = response;
      });
  }

  @action addExperience = () => {
    this.apiService.addExperience()
      .then((response) => {
        this.experience = response;
      });
  }

  @action updateExperience = (id, experienceData) => {
    this.apiService.updateExperience(id, experienceData)
      .then((response) => {
        this.experience = response;
      });
  }

  @action deleteExperience = (id) => {
    this.apiService.deleteExperience(id)
      .then((response) => {
        this.experience = response;
      });
  }

  // projects
  @action getAllProjects = () => {
    this.apiService.fetchAllProjects()
      .then((response) => {
        this.projects = response;
      });
  }

  @action addProject = () => {
    this.apiService.addProject()
      .then((response) => {
        this.projects = response;
      });
  }

  @action updateProject = (id, projectData) => {
    this.apiService.updateProject(id, projectData)
      .then((response) => {
        this.projects = response;
      });
  }

  @action deleteProject = (id) => {
    this.apiService.deleteProject(id)
      .then((response) => {
        this.projects = response;
      });
  }

 // certifications
  @action getAllCertifications = () => {
    this.apiService.fetchAllCertifications()
      .then((response) => {
        this.certifications = response;
      });
  }

  @action addCertification = () => {
    this.apiService.addCertification()
      .then((response) => {
        this.certifications = response;
      });
  }

  @action updateCertification = (id, certificationData) => {
    this.apiService.updateCertification(id, certificationData)
      .then((response) => {
        this.certifications = response;
      });
  }

  @action deleteCertification = (id) => {
    this.apiService.deleteCertification(id)
      .then((response) => {
        this.certifications = response;
      });
  }

  // education
  @action getAllEducation = () => {
    this.apiService.fetchAllEducation()
      .then((response) => {
        this.education = response;
      });
  }

  @action addEducation = () => {
    this.apiService.addEducation()
      .then((response) => {
        this.education = response;
      });
  }

  @action updateEducation = (id, educationData) => {
    this.apiService.updateEducation(id, educationData)
      .then((response) => {
        this.education = response;
      });
  }

  @action deleteEducation = (id) => {
    this.apiService.deleteEducation(id)
      .then((response) => {
        this.education = response;
      });
  }

  // languages
  @action getAllLanguages = () => {
    this.apiService.fetchAllLanguages()
      .then((response) => {
        this.languages = response;
      });
  }

  @action addLanguage = () => {
    this.apiService.addLanguage()
      .then((response) => {
        this.languages = response;
      });
  }

  @action updateLanguage = (id, languageData) => {
    this.apiService.updateLanguage(id, languageData)
      .then((response) => {
        this.languages = response;
      });
  }

  @action deleteLanguage = (id) => {
    this.apiService.deleteLanguage(id)
      .then((response) => {
        this.languages = response;
      });
  }
}

export default Employee;
