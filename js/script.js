document.addEventListener('DOMContentLoaded', function () {
    const elementSnils = document.getElementById('snils');
    const maskOptionselSnils = {
        mask: '000-000-000 00'
    };
    var mask = IMask(elementSnils, maskOptionselSnils);

    const elementBirthDate = document.getElementById('birthDate');
    const maskOptionsBirthDate = {
        mask: Date,
        min: new Date(1900, 0, 1),
        max: new Date(2024, 0, 1),
        lazy: false
    };
    var mask = IMask(elementBirthDate, maskOptionsBirthDate);
});

document.getElementById('requestForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const lastName = document.getElementById('lastName').value;
    const firstName = document.getElementById('firstName').value;
    const middleName = document.getElementById('middleName').value;
    const snils = document.getElementById('snils').value;
    const birthDate = document.getElementById('birthDate').value;
    const availableData = document.getElementById('availableData').value;
    const years = document.getElementById('years').value ? document.getElementById('years').value : 0;
    const months = document.getElementById('months').value ? document.getElementById('months').value : 0;
    const days = document.getElementById('days').value ? document.getElementById('days').value : 0;

    let xml = `
    <ЗАПРОС_СВЕДЕНИЙ_О_СТРАХОВОМ_СТАЖЕ>
        <Фамилия> ${lastName} </Фамилия>
        <Имя> ${firstName} </Имя>
        <Отчество> ${middleName} </Отчество>
        <СНИЛС> ${snils} </СНИЛС>
        <ДатаРождения> ${birthDate} </ДатаРождения>
        <НаличиеДанных> ${availableData} </НаличиеДанных>
        <ОбщаяПродолжительностьСтраховогоСтажаНаДатуОбращенияГражданинаВОСЗ>
            <ОбщаяПродолжительностьСтраховогоСтажаЛет> ${years} </ОбщаяПродолжительностьСтраховогоСтажаЛет>
            <ОбщаяПродолжительностьСтраховогоСтажаМесяцев> ${months} </ОбщаяПродолжительностьСтраховогоСтажаМесяцев>
            <ОбщаяПродолжительностьСтраховогоСтажаДней> ${days} </ОбщаяПродолжительностьСтраховогоСтажаДней>
        </ОбщаяПродолжительностьСтраховогоСтажаНаДатуОбращенияГражданинаВОСЗ>
    </ЗАПРОС_СВЕДЕНИЙ_О_СТРАХОВОМ_СТАЖЕ>`;

    document.getElementById('result').value = xml;

});


