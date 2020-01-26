const resource = () => {
    var projects = [
        {
          title: "Castor",
          url: "https://lleonesouza.github.io/castor",
          img: Castor,
          type: "desktop",
          recently: true,
          status: "await"
        },
        {
          title: "CronRequest",
          url: "https://lleonesouza.github.io/cronTest",
          img: Tester,
          type: "desktop",
          recently: true,
          status: "await"
        },
        {
          title: "FFmagico",
          url: "https://lleonesouza.github.io/ffmagico",
          img: FFmagico,
          type: "frontend",
          recently: false,
          status: "done"
        }
      ];

    return {
        getUser: '',
        updateUser: '',
        deleteUser: '',

        getProjects: '',
        createProjetct: '',
        updateProject: '',
        deleteProject: '',

        getTech: '',
        createTech: '',
        updateTech: '',
        deleteTech: ''
    }
}