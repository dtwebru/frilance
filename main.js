document.addEventListener("DOMContentLoaded", () => {
  const videoPlayers = document.querySelectorAll(".video-player");

  videoPlayers.forEach((player) => {
    const video = player.querySelector("video");
    const overlay = player.querySelector(".play-button-overlay");

    player.addEventListener("click", () => {
      if (video.paused || video.ended) {
        video.play();
        player.classList.add("playing");
        video.controls = true;
      } else {
        video.pause();
        player.classList.remove("playing");
        video.controls = false;
      }
    });

    video.addEventListener("ended", () => {
      player.classList.remove("playing");
      video.controls = false;
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const videoPlayers = document.querySelectorAll(".video-player1");

  videoPlayers.forEach((player) => {
    const video = player.querySelector("video");
    const overlay = player.querySelector(".play-button-overlay1");

    player.addEventListener("click", () => {
      if (video.paused || video.ended) {
        video.play();
        player.classList.add("playing");
        video.controls = true;
      } else {
        video.pause();
        player.classList.remove("playing");
        video.controls = false;
      }
    });

    video.addEventListener("ended", () => {
      player.classList.remove("playing");
      video.controls = false;
    });
  });
});

var dateElement = document.querySelector(".start-date");
var tomorrowDate = new Date();
tomorrowDate.setTime(tomorrowDate.getTime() + 24 * 60 * 60 * 1000);
var tomorrowDayOfMonth = tomorrowDate.getDate();
var monthName = "октября";
dateElement.innerHTML =
  "Старт завтра" + ",  " + tomorrowDayOfMonth + "  " + monthName;






/// Элементы
const buttonInfoList = document.querySelectorAll(".sec33H1");
const addInfoModal = document.querySelector(".addInfoModal");
const addFullName = document.querySelector(".addFullName");
const addContact = document.querySelector(".addContact");
const addInfoClose = document.querySelector(".addInfoClose");
const addInfoSave = document.querySelector(".addInfoSave");

// Новый элемент Toast
const toastElement = document.getElementById("toast-message");

// URL твоего Google Apps Script
const googleScriptURL = "https://script.google.com/macros/s/AKfycbyZMLJqmZOqMZgteINrhDFEgoV3sYemok1Uowx94BHt_ICbAsUPN8N62u3DjvFPb8IIHg/exec";


// ===============================================
// ⭐ НОВАЯ ФУНКЦИЯ: Показать Toast
// ===============================================
function showToast(message, duration = 3000) {
    if (!toastElement) return;

    // Устанавливаем текст
    toastElement.textContent = message;
    
    // Показываем тост (добавляем класс 'show')
    toastElement.classList.add("show");

    // Убираем тост через заданное время
    setTimeout(() => {
        toastElement.classList.remove("show");
    }, duration);
}


// Открыть модалку
buttonInfoList.forEach(button => {
    button.addEventListener("click", () => {
        addInfoModal.showModal();
    });
});

// Закрыть модалку
addInfoClose.addEventListener("click", () => {
    addInfoModal.close();
});

addInfoSave.addEventListener("click", async () => {
    const fullName = addFullName.value.trim();
    const contact = addContact.value.trim();

    if (!fullName || !contact) {
        // ⭐ ЗАМЕНА ALERT: на Toast для ошибки
        showToast("Пожалуйста, заполните оба поля.", 4000); 
        return;
    }

    const formData = new FormData();
    formData.append('fullName', fullName); 
    formData.append('contact', contact); 

    try {
        const response = await fetch(googleScriptURL, {
            method: "POST",
            body: formData 
        });
        
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        
        // Очистка и закрытие
        addFullName.value = "";
        addContact.value = "";
        addInfoModal.close();
        
        // ⭐ ЗАМЕНА ALERT: на Toast для успеха
        showToast("✅ Данные успешно отправлены! Мы скоро свяжемся.", 4000); 
        
    } catch (error) {
        console.error("Ошибка при отправке:", error);
        // ⭐ ЗАМЕНА ALERT: на Toast для ошибки
        showToast("❌ Ошибка при отправке данных. Проверьте подключение.", 5000);
    }
});