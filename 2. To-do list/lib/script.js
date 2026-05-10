const tasks = [
  {
    Folder: "Grocery",
    Tasks: {
      "Bananas": "undone",
      "Cookies": "undone"
    }
  },
  {
    Folder: "Homework",
    Tasks: {
      "Vietnamese": "undone",
      "Math": "undone"
    }
  },
  {
    Folder: "Exam",
    Tasks: {
      "Economics": "undone",
      "Accounting": "undone"
    }
  }
];

const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const folderSelect = document.getElementById("folder-select");
const folderContainer = document.getElementById("folder-container");

function getTasksOfFolder(folderName) {
  const saved = localStorage.getItem("tasks_" + folderName);
  if (saved) {
    return JSON.parse(saved);
  }
  const folder = tasks.find(f => f.Folder === folderName);
  return folder ? folder.Tasks : {};
}

function saveTasksOfFolder(folderName, tasksObj) {
  localStorage.setItem("tasks_" + folderName, JSON.stringify(tasksObj));
}

function loadTasksFromFolder(folderName) {
  listContainer.innerHTML = "";
  const folderTasks = getTasksOfFolder(folderName);
  Object.entries(folderTasks).forEach(([taskName, status]) => {
    const li = document.createElement("li");
    li.innerHTML = '<input type="checkbox"> ' + taskName;
    listContainer.appendChild(li);
  });
}

if (folderSelect) {
  tasks.forEach(folder => {
    const option = document.createElement("option");
    option.value = folder.Folder;
    option.textContent = folder.Folder;
    folderSelect.appendChild(option);
  });

  if (listContainer) {
    const selectedFolder = localStorage.getItem("selectedFolder");
    folderSelect.value = selectedFolder;
    if (selectedFolder) {
      loadTasksFromFolder(selectedFolder); 

      folderSelect.addEventListener("change", function () {
        const newFolder = folderSelect.value;
        localStorage.setItem("selectedFolder", newFolder);
        loadTasksFromFolder(newFolder);
      });
    }
  }
}

if (folderContainer) {
  tasks.forEach(folder => {
    const div = document.createElement("div");
    const img = document.createElement("img");
    
    img.src = "image/folder.png";
    
    const p = document.createElement("p");
    
    p.textContent = folder.Folder;
    
    div.onclick = function () {
      localStorage.setItem("selectedFolder", folder.Folder);
      window.location.href = "index.html";
    };

    div.appendChild(img);
    div.appendChild(p);
    folderContainer.appendChild(div);
  });
}

function addTask() {
  if (inputBox.value === '') {
    alert("You must write something!");
  } 
  
  else {
    const currentFolder = localStorage.getItem("selectedFolder");
    const folderTasks = getTasksOfFolder(currentFolder);
    folderTasks[inputBox.value] = "undone";
    saveTasksOfFolder(currentFolder, folderTasks);  

    let li = document.createElement("li");
    li.innerHTML = '<input type="checkbox"> ' + inputBox.value;
    listContainer.appendChild(li);
  }
}