const extensionsList = document.querySelector(".extensions-list");

const fetchData = async () => {
    try {
        const response = await fetch("./data.json");
        if(!response.ok) 
            throw new Error(`HTTP error! Status: ${response.status}`);

        const data = await response.json();
        showData(data);
    } catch(error) {
        console.error('Error fetching data:', error);
    }
}

const showData = (data) => {
    const extensions = data.map(({ id, logo, name, description }) => (
        `
            <li class="extension">
                <div class="extension-info">
                    <img src="${logo}" alt="extension-icon">
                    <div class="extension-text">
                        <h3>${name}</h3>
                        <p>${description}</p>
                    </div>
                </div>
                <span class="extension-actions">
                    <button type="button" class="remove-btn">Remove</button>
                    <input type="checkbox" id="toggle-btn-${id}">
                    <label for="toggle-btn-${id}" class="switch-btn"></label>
                </span>
            </li>

        `
    )).join("");

    extensionsList.innerHTML = extensions;
}

fetchData();