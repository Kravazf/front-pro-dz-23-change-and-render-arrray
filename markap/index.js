// 1. Для понеділка та вівторка елементи масиву повинні виконати наступні дії:

// 2. Перевести час, який було витрачено на виконання завдання, з хвилин у години.

// 3 .Залишити тільки ті завдання, на виконання яких потрібно більше 2 годин.

// 4 .Помножити результат на годинну ставку (суму) і додати цей результат як третій елемент масиву.

// 5 .Зробіть рендеринг в html-таблицю, як у цьому прикладі:
  // <tr>
  // <td>Task name: Write a tutorial</td>
  // <td>Taks duration: 3 hours</td>
  // <td>Task amount: $300</td>
  // </tr>

// 6 .Використовуйте тільки ці методи concat/forEach/map/filter/join (за необхідності).

const amount = 100;

const monday = [
  ['Write a tutorial', 180],
  ['Some web development', 120]
];
const tuesday = [
  ['Keep writing that tutorial', 240],
  ['Some more web development', 360],
  ['A whole lot of nothing', 240]
];

function convertMinutesToHours(arr) {
  const convertedArray = arr.map(function(subarray) {
    const task = subarray[0];
    const minutes = subarray[1];
    const hours = minutes / 60;
    return [task, hours];
  });

  return convertedArray;
}

let mondayInHours = convertMinutesToHours(monday);
let tuesdayInHours = convertMinutesToHours(tuesday);

function filterTasksByDuration(arr) {
  const filteredArray = arr.filter(function(subarray) {
    const hours = subarray[1];
    return hours > 2;
  });

  return filteredArray;
}

let mondayFiltered = filterTasksByDuration(mondayInHours);
let tuesdayFiltered = filterTasksByDuration(tuesdayInHours);

function calculateTaskAmount(arr) {
  const calculatedArray = arr.map(function(subarray) {
    const task = subarray[0];
    const hours = subarray[1];
    const taskAmount = hours * amount;
    return [task, hours, taskAmount];
  });

  return calculatedArray;
}

let mondayWithAmount = calculateTaskAmount(mondayFiltered);
let tuesdayWithAmount = calculateTaskAmount(tuesdayFiltered);

function outputToHTML(tasks) {
  let inputInHTML = '';

  tasks.forEach(function(subarray) {
    const task = subarray[0];
    const hours = subarray[1];
    const amount = subarray[2];

    inputInHTML += 
    `<table>
      <tr>
        <td>Task name: ${task}</td>
        <td>Task duration: ${hours} hours</td>
        <td>Task amount: $${amount}</td>
      </tr>
    </table>`;
  });

  return inputInHTML;
}

let outputTasksToHTML = outputToHTML(mondayWithAmount.concat(tuesdayWithAmount));

document.write(outputTasksToHTML);
