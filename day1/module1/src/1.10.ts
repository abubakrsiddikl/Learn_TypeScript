{
  // union type
  //   type FrontendDeveloper = "fakibaziDeveloper" | "jniorDeveloper";
  //   type FullstackDeveloper = "frontendDeveloper" | "fullstackDeveloper";
  //   type Developer = FrontendDeveloper | FullstackDeveloper;
  //   const newDeveloper: FrontendDeveloper = "fakibaziDeveloper";

  //   type User = {
  //     name: string;
  //     email?: string;
  //     gender: "male" | "female";
  //     bloodGroupe: "O+" | "O-" | "AB+";
  //   };
  //   const user: User = {
  //     name: "persian",
  //     gender: "male",
  //     bloodGroupe: "O+",
  //   };

  // Intersection Type
  type FrontendDeveloper = {
    skills: string[];
    designation1: "Frontend Developer";
  };
  type BackendDeveloper = {
    skills: string[];
    designation2: "Backend Developer";
  };
  type FullstackDeveloper = FrontendDeveloper & BackendDeveloper;
  const fullstackDeveloper: FullstackDeveloper = {
    skills: ["html", "js", "mongo"],
    designation1: "Frontend Developer",
    designation2: "Backend Developer",
  };
}
