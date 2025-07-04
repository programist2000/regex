// form-autosave.js
(function () {
    // Сохраняем значения всех input и textarea
    function saveFieldValue(field) {
        if (!field.name && !field.id) return; // нужен уникальный идентификатор
        const key = 'autosave_' + (field.id || field.name);
        localStorage.setItem(key, field.value);
    }

    // Восстанавливаем значения
    function restoreFieldValue(field) {
        if (!field.name && !field.id) return;
        const key = 'autosave_' + (field.id || field.name);
        const saved = localStorage.getItem(key);
        if (saved !== null) field.value = saved;
    }

    function clearSavedFields(ids) {
        ids.forEach(id => {
            const key = 'autosave_' + id;
            localStorage.removeItem(key);
        });
    }

    function setupAutosave() {
        const fields = document.querySelectorAll('input[type="text"], input[type="email"], input[type="number"], input[type="search"], input[type="tel"], input[type="url"], textarea');
        fields.forEach(field => {
            restoreFieldValue(field);
            field.addEventListener('input', () => saveFieldValue(field));
        });

        // Добавляем обработчики для кнопок очистки
        const clearIds = ['clear_input_one', 'clear_input_two'];
        clearIds.forEach(btnId => {
            const btn = document.getElementById(btnId);
            if (btn) {
                btn.addEventListener('click', function () {
                    clearSavedFields(['inp', 'inp2']);
                });
            }
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', setupAutosave);
    } else {
        setupAutosave();
    }
})(); 