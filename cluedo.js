// suspects, weapons and clues

const suspects = [
  {
    nombre: "Candice Caramelo",
    detalles:
      "Candice Caramelo es una famosa repostera conocida por sus exquisitos postres. Su tienda de dulces, 'La Dulce Tentación', es muy popular en la ciudad. Se la describe como una persona amable y amigable, pero algunos rumores sugieren que tiene una rivalidad secreta con otro pastelero local.",
  },
  {
    nombre: "Paco Peludo",
    detalles:
      "Paco Peludo es un peluquero de renombre que ha estado trabajando en la ciudad durante más de 20 años. Su peluquería, 'El Rizo Feliz', es conocida por su ambiente acogedor y su excelente servicio. Aunque aparenta ser extrovertido y amigable, hay quienes dicen que guarda secretos oscuros detrás de su sonrisa.",
  },
  {
    nombre: "Rosa Melosa",
    detalles:
      "Rosa Melosa es una apasionada jardinera que cuida con esmero el jardín de la mansión del Señor Byte. Se la conoce por su paciencia y dedicación a las plantas, y muchos la consideran una experta en el cultivo de rosas. Sin embargo, algunos rumores sugieren que guarda resentimiento hacia el Señor Byte por razones desconocidas.",
  },
  {
    nombre: "Pedro Picapiedra",
    detalles:
      "Pedro Picapiedra es un albañil de la localidad conocido por su habilidad para trabajar con piedra y cemento. Trabaja en proyectos de construcción en toda la ciudad y es respetado por su ética laboral. Aunque su apariencia ruda puede ser intimidante, muchos lo consideran un hombre de buen corazón.",
  },
  {
    nombre: "Lucía Lentejuela",
    detalles:
      "Lucía Lentejuela es una diseñadora de moda talentosa que ha trabajado en algunas de las casas de moda más prestigiosas del mundo. Se la conoce por su estilo extravagante y su personalidad extrovertida. Sin embargo, algunos la consideran superficial y poco confiable.",
  },
  {
    nombre: "Miguelito Malabarista",
    detalles:
      "Miguelito Malabarista es un artista callejero que entretiene a la gente con sus habilidades de malabarismo y acrobacias. Es conocido por su creatividad y su pasión por el arte callejero. Sin embargo, su estilo de vida nómada y su falta de estabilidad financiera lo hacen sospechoso para algunos.",
  },
  {
    nombre: "Dolores Delirio",
    detalles:
      "Dolores Delirio es una actriz de teatro talentosa que ha protagonizado varias obras de éxito en la ciudad. Es conocida por su capacidad para sumergirse completamente en sus personajes y por su temperamento apasionado. Sin embargo, algunos la critican por su comportamiento volátil fuera del escenario.",
  },
  {
    nombre: "Ramona Risas",
    detalles:
      "Ramona Risas es una comediante local que se presenta regularmente en un club de comedia cercano. Es conocida por su ingenio agudo y su sentido del humor irreverente. Aunque parece tener una personalidad alegre, algunos la consideran una experta en ocultar sus verdaderos sentimientos.",
  },
  {
    nombre: "Federico Frivolidad",
    detalles:
      "Federico Frivolidad es un millonario excéntrico que ha heredado su fortuna familiar. Es conocido por su estilo de vida extravagante y sus fiestas lujosas. Aunque parece despreocupado, algunos lo consideran un hombre astuto que siempre consigue lo que quiere.",
  },
  {
    nombre: "Lola Llorona",
    detalles:
      "Lola Llorona es una cantante de blues talentosa que ha ganado reconocimiento por su voz única y su emotividad en el escenario. Se la conoce por su estilo de vida bohemio y su tendencia a expresar sus emociones a través de la música. Sin embargo, su pasado tumultuoso la hace sospechosa para algunos.",
  },
];

const clues = {
  "Candice Caramelo": [
    {
      target: "Paco Peludo",
      clue: "Escuché a Paco Peludo hablando en voz baja con alguien sobre un posible problema que tenía con el Señor Byte.",
    },
    {
      target: "Rosa Melosa",
      clue: "Vi a Rosa Melosa caminando apresuradamente cerca del lugar del crimen poco antes de que ocurriera.",
    },
    {
      target: "Lucía Lentejuela",
      clue: "Pedro Picapiedra mencionó que vio a Lucía Lentejuela hablando con el Señor Byte en el jardín poco antes del crimen.",
    },
  ],
  "Paco Peludo": [
    {
      target: "Candice Caramelo",
      clue: "Candice Caramelo parecía preocupada después de una conversación con Federico Frivolidad en la sala de estar.",
    },
    {
      target: "Rosa Melosa",
      clue: "Vi a Rosa Melosa hablando con Pedro Picapiedra en tono de discusión en el jardín.",
    },
    {
      target: "Miguelito Malabarista",
      clue: "Escuché a Rosa Melosa hablando sobre un posible conflicto entre Miguelito Malabarista y el Señor Byte.",
    },
  ],
  "Rosa Melosa": [
    {
      target: "Ramona Risas",
      clue: "Candice Caramelo mencionó que vio a Ramona Risas merodeando cerca del estudio del Señor Byte la noche del crimen.",
    },
    {
      target: "Paco Peludo",
      clue: "Paco Peludo estaba discutiendo con Dolores Delirio sobre el Señor Byte en el pasillo poco antes del crimen.",
    },
    {
      target: "Pedro Picapiedra",
      clue: "Pedro Picapiedra parecía preocupado después de una conversación con Miguelito Malabarista en la sala de estar.",
    },
  ],
  "Pedro Picapiedra": [
    {
      target: "Ramona Risas",
      clue: "Candice Caramelo mencionó haber visto a Ramona Risas escondiendo algo detrás de un arbusto cerca del lugar del crimen.",
    },
    {
      target: "Miguelito Malabarista",
      clue: "Paco Peludo mencionó haber visto a Miguelito Malabarista rondando cerca de la entrada principal de la mansión la noche del crimen.",
    },
    {
      target: "Lucía Lentejuela",
      clue: "Lucía Lentejuela parecía nerviosa después de una conversación con Dolores Delirio en la sala de estar poco antes del crimen.",
    },
  ],
  "Lucía Lentejuela": [
    {
      target: "Miguelito Malabarista",
      clue: "Pedro Picapiedra mencionó haber visto a Miguelito Malabarista rondando cerca de la entrada principal de la mansión la noche del crimen.",
    },
    {
      target: "Dolores Delirio",
      clue: "Dolores Delirio estaba discutiendo en voz alta con Federico Frivolidad sobre el Señor Byte en el jardín poco antes del crimen.",
    },
    {
      target: "Miguelito Malabarista",
      clue: "Miguelito Malabarista parecía preocupado después de una conversación con Ramona Risas en la sala de estar.",
    },
  ],
  "Miguelito Malabarista": [
    {
      target: "Pedro Picapiedra",
      clue: "Pedro Picapiedra parecía nervioso después de una conversación con Lucía Lentejuela en el jardín poco antes del crimen.",
    },
    {
      target: "Ramona Risas",
      clue: "Dolores Delirio mencionó haber visto a Ramona Risas escondiendo algo detrás de un arbusto cerca del lugar del crimen.",
    },
    {
      target: "Ramona Risas",
      clue: "Ramona Risas estaba discutiendo en voz baja con Federico Frivolidad sobre el Señor Byte en el pasillo poco antes del crimen.",
    },
  ],
  "Dolores Delirio": [
    {
      target: "Ramona Risas",
      clue: "Lucía Lentejuela mencionó haber visto a Ramona Risas merodeando cerca del estudio del Señor Byte la noche del crimen.",
    },
    {
      target: "Pedro Picapiedra",
      clue: "Miguelito Malabarista mencionó haber visto a Pedro Picapiedra hablando en voz baja con alguien sobre un posible problema que tenía con el Señor Byte.",
    },
    {
      target: "Ramona Risas",
      clue: "Ramona Risas parecía preocupada después de una conversación con Candice Caramelo en el jardín poco antes del crimen.",
    },
  ],
  "Ramona Risas": [
    {
      target: "Paco Peludo",
      clue: "Candice Caramelo mencionó haber visto a Paco Peludo hablando en voz baja con alguien sobre un posible problema que tenía con el Señor Byte.",
    },
    {
      target: "Lucía Lentejuela",
      clue: "Paco Peludo mencionó haber visto a Lucía Lentejuela caminando apresuradamente cerca del lugar del crimen poco antes de que ocurriera.",
    },
    {
      target: "Federico Frivolidad",
      clue: "Federico Frivolidad parecía nervioso después de una conversación con Miguelito Malabarista en el pasillo poco antes del crimen.",
    },
  ],
  "Federico Frivolidad": [
    {
      target: "Dolores Delirio",
      clue: "Pedro Picapiedra mencionó haber visto a Dolores Delirio discutiendo en voz alta con Ramona Risas sobre el Señor Byte en el pasillo poco antes del crimen.",
    },
    {
      target: "Dolores Delirio",
      clue: "Lucía Lentejuela mencionó haber visto a Dolores Delirio discutiendo en voz baja con Ramona Risas en el jardín poco antes del crimen.",
    },
    {
      target: "Dolores Delirio",
      clue: "Ramona Risas mencionó haber visto a Dolores Delirio discutiendo con Federico Frivolidad sobre el Señor Byte en el pasillo poco antes del crimen.",
    },
  ],
  "Lola Llorona": [
    {
      target: "Lucía Lentejuela",
      clue: "Paco Peludo mencionó haber visto a Lucía Lentejuela hablando con el Señor Byte en el jardín poco antes del crimen.",
    },
    {
      target: "Ramona Risas",
      clue: "Lucía Lentejuela mencionó haber visto a Ramona Risas merodeando cerca del estudio del Señor Byte la noche del crimen.",
    },
    {
      target: "Federico Frivolidad",
      clue: "Ramona Risas mencionó haber visto a Lola Llorona hablando en voz baja con alguien sobre un posible problema que tenía con el Señor Byte.",
    },
  ],
};

const weapons = [
  {
    name: "Candelabro",
    isMurderWeapon: false,
    isDamaged: true,
    hasBlood: false,
  },
  { name: "Cuerda", isMurderWeapon: false, isDamaged: false, hasBlood: false },
  {
    name: "Llave inglesa",
    isMurderWeapon: false,
    isDamaged: true,
    hasBlood: false,
  },
  {
    name: "Cuchillo",
    isMurderWeapon: false,
    isDamaged: false,
    hasBlood: false,
  },
  { name: "Revólver", isMurderWeapon: false, isDamaged: true, hasBlood: false },
  { name: "Pipa", isMurderWeapon: false, isDamaged: false, hasBlood: false },
  { name: "Hacha", isMurderWeapon: false, isDamaged: true, hasBlood: false },
  {
    name: "Vara de hierro",
    isMurderWeapon: false,
    isDamaged: false,
    hasBlood: false,
  },
  {
    name: "Bate de béisbol",
    isMurderWeapon: false,
    isDamaged: true,
    hasBlood: false,
  },
];

// other initialized variables
let collectedClues = {};
let interviewedSuspects = [];
let revealedClues = {};
let continueInvestigation = false;

// randomized murder weapon
let murderWeaponIndex = Math.floor(Math.random() * weapons.length);
weapons[murderWeaponIndex].isMurderWeapon = true;
weapons[murderWeaponIndex].hasBlood = true;
let murderWeapon = weapons[murderWeaponIndex];

// presentation suspects
console.log(
  "Para jugar, presta atención a la consola donde se te presentarán pistas y objetos para investigar. Utiliza las ventanas emergentes para seleccionar opciones, prompts para seleccionar sospechosos o armas para investigar y, al final, acusa al sospechoso correcto con el arma homicida. ¡Recuerda leer cuidadosamente todas las pistas y objetos presentados!"
);
console.log("Los sospechosos en este caso son: ");
suspects.forEach((suspect, index) => {
  console.log(`${index + 1}. ${suspect.nombre}`);
});

// game trigger
document.getElementById("startGame").addEventListener("click", function () {
  suspectInterview();
});

// interviews --> includes the selection of the suspect to be interrogated, the interviews, the clues obtained and the most frequently mentioned suspect

// function to choose a suspect for interrogation
function chooseSuspect() {
  // filter out suspects who have already been interviewed
  let availableSuspects = suspects.filter(
    (suspect) => !interviewedSuspects.includes(suspect.nombre)
  );

  // check if there are any suspects left to interview
  if (availableSuspects.length === 0) {
    console.log("No hay más sospechosos a los que interrogar.");
    return null; // return null if no suspects are available
  }

  // create a lit of available suspects names
  let suspectNames = availableSuspects.map((suspect) => suspect.nombre);
  let suspectNameList = suspectNames.join(", "); // join names into a comma-separated string

  let userInput;

  // loop until a valid suspect name is entered
  do {
    userInput = prompt(
      "Selecciona a un sospechoso para interrogar: " + suspectNameList
    );

    // check if the entered name is not in the list of available suspects
    if (!suspectNames.includes(userInput)) {
      console.log(
        "Por favor, selecciona un sospechoso disponible. No puedes interrogar al mismo sospechoso dos veces."
      );
    }
  } while (!suspectNames.includes(userInput)); // keep prompting until a valid name is entered

  // find the selected suspect object from the available suspects
  let selectedSuspect = availableSuspects.find(
    (suspectObj) => suspectObj.nombre === userInput
  );

  // add the selected suspect's name to the list of interviewed suspects
  interviewedSuspects.push(selectedSuspect.nombre);
  return selectedSuspect; // return the selected suspect object
}

// function to ask a question to a suspect
function askQuestion(suspect) {
  //log a message indicating that a clue has been obtained
  console.log(`Has obtenido esta pista: `);

  // retrieve the clues associated with the suspect's name
  let clue = clues[suspect.nombre];

  // check if there are any clues for the suspect
  if (clue) {
    // filter out clues that have already been revealed
    let unrevealedClues = clue.filter((clue) => !revealedClues[clue.clue]);

    // check if there are any unrevealed clues left
    if (unrevealedClues.length > 0) {
      // select a random unrevealed clue
      let randomClue =
        unrevealedClues[Math.floor(Math.random() * unrevealedClues.length)];

      // log the selected clue
      console.log(`${randomClue.clue}`);

      // mark the selected clue as revealed
      revealedClues[randomClue.clue] = true;

      // check if the suspect has any collected clues
      if (!collectedClues[suspect.nombre]) {
        collectedClues[suspect.nombre] = [];
      }

      // add the selected clue to the suspect's collected clues
      collectedClues[suspect.nombre].push(randomClue);
    } else {
      //log a message indicating there are no new clues for this suspect
      console.log("No hay más pistas nuevas para este sospechoso.");
    }
  } else {
    // log a message indicating no clues were found for the suspect
    console.log("No se encontraron pistas para el sospechoso.");
  }
}

// function to conduct an interview with a suspect
function suspectInterview() {
  //choosing a suspect to interview
  let suspect = chooseSuspect();

  // if no suspect is chosen (i.e., all suspects have been interviewed), end the interrogation
  if (chooseSuspect === null) {
    console.log("Fin del interrogatorio.");
    investigateObjects();
    return;
  }

  // initialize a counter for the number of questions asked
  let questionAsked = 0;

  // ask two questions to the chosen suspect
  while (questionAsked < 2) {
    askQuestion(suspect);
    questionAsked++;
  }

  // ask the user if they want to interview another suspect
  let continueInterview = confirm(
    "¿Quieres interrogar a otro sospechoso? (si/no)"
  );

  // if the user wants to continue, recursively call this function to interview another suspect
  if (continueInterview) {
    suspectInterview();
  } else {
    // if the user does not want to continue, log the end of interview and set the investigation flag to true
    console.log("Fin del interrogatorio.");
    continueInvestigation = true;
  }

  // call the function to investigate objects
  investigateObjects();
}

// function to find the suspect mentiones most frequently in the collected clues
function findMostMentionedSuspect() {
  // initialize an object to keep track of how many times each suspect is mentioned
  let suspectMentions = {};

  // iterate over each suspect in collected clues
  for (let suspect in collectedClues) {
    collectedClues[suspect].forEach((clue) => {
      // for each suspect, iterate over their collected clues
      if (!suspectMentions[clue.target]) {
        // if the suspect is not already in the suspectMentions object, initialize their count to 0
        suspectMentions[clue.target] = 0;
      }

      // increment the count for the suspect mentioned in the clue
      suspectMentions[clue.target]++;
    });
  }

  // initialize variables to keep track of the suspect with the highest mention count
  let maxMentions = 0;
  let mostMentionedSuspects = null;

  // iterate over the suspectMentions object to find the suspect with the highest mention count
  for (let suspect in suspectMentions) {
    // if the current suspect's mention count is higher than the current maxMentions, update maxMentions and mostMentionedSuspect
    if (suspectMentions[suspect] > maxMentions) {
      maxMentions = suspectMentions[suspect];
      mostMentionedSuspects = suspect;
    }
  }

  // return the suspect with the highest mention count
  return mostMentionedSuspects;
}

// weapon investigation --> where you will see the status of the objects under investigation

// function to investigate objects to find the murder weapon
function investigateObjects() {
  // continue investigating as long as the investigation flag is true
  while (continueInvestigation) {
    // log list of weapons that could be the murder weapon
    console.log(
      "Estos son los objetos que se encuentran en la habitación que podrían ser el arma homicida: "
    );

    // iterate over each weapon and log its name
    weapons.forEach((weapon, index) => {
      console.log(`${index + 1}. ${weapon.name}`);
    });

    let selectedWeaponIndex;

    // prompt the user to select a weapon for investigation until a valid input is received
    do {
      selectedWeaponIndex = parseInt(
        prompt("Selecciona un objeto para investigar (por número): ")
      );

      // check if the input is not a number, less than 1 or greater than the number of weapons
      if (
        isNaN(selectedWeaponIndex) ||
        selectedWeaponIndex < 1 ||
        selectedWeaponIndex > weapons.length
      ) {
        console.log("Entrada inválida. Ingresa un número válido.");
      }
    } while (
      isNaN(selectedWeaponIndex) ||
      selectedWeaponIndex < 1 ||
      selectedWeaponIndex > weapons.length
    );

    // select the weapon based on the user's input
    let selectedWeapon = weapons[selectedWeaponIndex - 1];

    // log the selected weapon's name
    console.log(`Has seleccionado ${selectedWeapon.name}`);

    // log whether the selected weapon is damaged
    console.log(
      `Buscas desperfectos en el objeto que puedan indicar su uso como el arma homicida ¿Tiene desperfectos? ${
        selectedWeapon.isDamaged ? "Sí" : "No"
      }`
    );

    // log whether the selected weapon has blood
    console.log(
      `Sigues inspeccionando el arma ¿Tiene sangre? ${
        selectedWeapon.hasBlood ? "Sí" : "No"
      }`
    );

    // ask user if they want to investigate another object
    continueInvestigation = confirm("¿Quieres investigar otro objeto?");

    // if the user does not want to continue, show the final report
    if (!continueInvestigation) {
      showFinalReport();
    }
  }
}

// final report --> shows a summary of the interviews and the weapons investigated.

// function to display the final report of the investigation
function showFinalReport() {
  console.log("\n---Informe Final---");

  // log all the collected clues
  console.log("\nPistas Recopiladas:");

  // iterate over each suspect in the collectes clues
  for (let suspect in collectedClues) {
    console.log(`${suspect}`);

    // for each clue associated with the suspect, log the clue
    collectedClues[suspect].forEach((clue, index) => {
      console.log(`${index + 1}. ${clue.clue}`);
    });
  }

  // find the suspect mentioned most frequently in collected clues
  let mostMentionedSuspect = findMostMentionedSuspect();
  console.log(`\nSospechoso más mencionado: ${mostMentionedSuspect}`);

  // log all the weapons and status
  console.log("\nArmas investigadas: ");
  weapons.forEach((weapon, index) => {
    console.log(`${index + 1}. ${weapon.name}`);
    console.log(`    - Tiene desperfectos: ${weapon.isDamaged ? "Sí" : "No"}`);
    console.log(`    - Tiene sangre: ${weapon.hasBlood ? "Sí" : "No"}`);
  });

  // make an accusation based on the investigation
  makeAccusation();
}

// accusation function
function makeAccusation() {
  console.log("\n---Acusación final---");

  let isAccusationCorrect = false;

  // loop until a correct accusation is made
  while (!isAccusationCorrect) {
    // prompt name of the accused and the weapon used
    let accused = prompt("¿A quién acusas?");
    let weapon = prompt("¿Qué arma es la homicida?");

    // check if the entered name is a valid suspect
    let isValidSuspect = suspects.some((suspect) => suspect.nombre === accused);

    // if the entered name is not a valid suspect, alert the user and continue the loop
    if (!isValidSuspect) {
      alert(
        "El sospechoso ingresado no es válido. Por favor, intenta de nuevo."
      );
      continue;
    }

    // find the selected weapon from the list of weapons
    let selectedWeapon = weapons.find((w) => w.name === weapon);

    // check is the selected weapon is murder weapon
    if (selectedWeapon && selectedWeapon.isMurderWeapon) {
      let culprit = findMostMentionedSuspect();

      // check if the acussed is the culprit
      if (accused === culprit) {
        alert(
          `Has acusado a ${accused} de ser el asesino, siendo el arma homicida ${weapon}`
        );
        alert("Acusación correcta ¡Caso cerrado!");

        // set the flag to true to end the loop
        isAccusationCorrect = true;

        // stop the investigation
        continueInvestigation = false;

        // reload the page so you can start a new game
        location.reload();
        return;
      } else {
        // suspect accused is not culprit
        alert(`Has acusado a ${accused} pero no era el asesino`);
        console.log("Acusación incorrecta");
      }
    } else {
      // selected weapon is not the correct one
      alert(`El arma seleccionada no es la correcta.`);
      console.log("Acusación incorrecta");
    }
  }
}
