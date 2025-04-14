let taskId = 0;

    function addTask() {
      const taskInput = document.getElementById('taskInput');
      const taskText = taskInput.value.trim();
      if (taskText === '') 
        return;

      const task = document.createElement('div');
      task.className = 'task';
      task.draggable = true;
      task.textContent = taskText;
      task.id = `task-${taskId++}`;
      task.addEventListener('dragstart', drag);

      document.getElementById('todo').appendChild(task);
      taskInput.value = '';
    }

    function allowDrop(e) {
      e.preventDefault();
    }

    function drag(e) {
      e.dataTransfer.setData('text', e.target.id);
      e.target.classList.add('dragging');
    }

    function drop(e) {
      e.preventDefault();
      const taskId = e.dataTransfer.getData('text');
      const task = document.getElementById(taskId);
      task.classList.remove('dragging');
      e.currentTarget.appendChild(task);
    }