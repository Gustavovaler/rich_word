

const app = function() {

    const setFrame = () => {
        let editor = document.getElementById('editor');
        editor.style.width = "100%";
        editor.style.border = "1px solid gray";
        editor.style.minHeight = "5em";
        return editor;
    };
    const createToolsPanel = (frame) =>{
        let toolPanel = document.createElement('div');
        toolPanel.style.backgroundColor = "#efefef";
        toolPanel.style.height = "2rem";
        toolPanel.style.width = "100%";
        frame.appendChild(toolPanel);

    };
    setFrame();
    createToolsPanel(editor); 
};

app();