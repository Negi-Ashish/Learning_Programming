function predictLife(firstName, lastName, age) {
  // Create deterministic seed
  const seed = firstName + lastName + age;
  let hash = 0;

  for (let i = 0; i < seed.length; i++) {
    hash = (hash * 31 + seed.charCodeAt(i)) % 1000000;
  }

  // Word banks (same meaning, varied wording)
  const successVerbs = ["build", "develop", "achieve", "earn", "maintain"];
  const successAdjectives = [
    "steady",
    "respectable",
    "consistent",
    "modest",
    "reliable",
  ];
  const endings = [
    "passing away peacefully surrounded by loved ones",
    "living a long and calm life before resting quietly",
    "being remembered fondly after a natural passing",
    "leaving the world peacefully after a fulfilled life",
  ];

  // Profession pools
  const studentPaths = [
    "a student exploring future interests",
    "a student focused on learning and growth",
    "a student preparing for a professional career",
  ];

  const professions = [
    "Business owner",
    "engineer",
    "teacher",
    "accountant",
    "designer",
    "business analyst",
    "Doctor of some sort",
    "consultant",
    "project manager",
    "researcher",
  ];

  const seniorRoles = [
    "a mentor in your field",
    "a consultant sharing experience",
    "a retired professional",
    "an advisor to younger generations",
  ];

  const verb = successVerbs[hash % successVerbs.length];
  const adj = successAdjectives[(hash >> 2) % successAdjectives.length];
  const ending = endings[(hash >> 4) % endings.length];

  // Profession based on age
  let profession;
  if (age < 18) {
    profession = studentPaths[hash % studentPaths.length];
  } else if (age < 60) {
    profession = professions[hash % professions.length];
  } else {
    profession = seniorRoles[hash % seniorRoles.length];
  }

  // Realistic money (lifetime savings / net worth estimate)
  let money;
  if (age < 18) {
    money = ((hash % 5) + 1) * 1_000;
  } else if (age < 30) {
    money = ((hash % 150) + 15) * 1_000;
  } else if (age < 50) {
    money = ((hash % 500) + 40) * 1_000;
  } else {
    money = ((hash % 90) + 60) * 1_000;
  }

  // Age timeline
  const ageStages = [
    "• Childhood: curious and observant",
    "• Teens: forming identity and skills",
    `• Adulthood: you ${verb} ${adj} progress in your career`,
    "• Later years: stability, reflection, and balance",
  ];

  return `
Life Prediction for ${firstName} ${lastName} (Age ${age})

Age Timeline:
${ageStages.join("\n")}

Current Situation:
You are currently ${profession}.

Career & Finances:
You ${verb} a ${adj} level of success, accumulating approximately $${money.toLocaleString()} over time.

Final Chapter:
You live a full and meaningful life, eventually ${ending}.
`;
}
console.log(predictLife("Ashish", "Negi", 27));
