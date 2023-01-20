const createFormGroupTemplates = (i) => {
    return `
        <label class="security__form-label" for="question${i}">Security Question ${i}</label>
            <select class="shared__select question${i}" name="question${i}" id="question${i}">
                <option value>Select a question</option>
                <option value="1">What was your childhood nickname?</option>
                <option value="2">What is the name of your favorite childhood friend?
                </option>
                <option value="3">What was the name of your first stuffed animal?</option>
                <option value="4">In what city or town did your mother and father meet?
                </option>
                <option value="5">What is your youngest brother’s birthday year?</option>
                <option value="6">What is your maternal grandmother's maiden name?</option>
                <option value="7">In what city or town was your first job?</option>
                <option value="8">What is the name of a college you applied to?</option>
            </select>
        <input class="security__form-${i}-input shared__input" type="text" name="question${i}"
            id="question${i}" placeholder="Answer">
    `;
};