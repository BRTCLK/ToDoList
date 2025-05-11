// Yeni öğe eklemek
function newElement() {
    let taskInput = document.getElementById("task");
    let taskText = taskInput.value.trim();
    
    if (taskText === "") {
      showToast('error');
      return;
    }
    
    let li = document.createElement("li");
    li.textContent = taskText;
    
    // Close butonunu oluşturuyoruz
    let removeBtn = document.createElement("span");
    removeBtn.textContent = "×";
    removeBtn.classList.add("close");
    
    // Close butonuna tıklanarak öğeyi silme
    removeBtn.onclick = function () { 
      removeItem(this); 
    };
  
    li.appendChild(removeBtn);
    document.getElementById("list").appendChild(li);
    taskInput.value = ""; // Inputu temizle
    showToast('success');
  }
  
  // Liste öğelerini silmek
  function removeItem(element) {
    let li = element.parentElement;
    li.remove();
  }
  
  // Toast bildirimini göstermek
  function showToast(type) {
    let toast = document.getElementById("liveToast");
    if (type === 'success') {
      toast.classList.remove('error');
      toast.classList.add('success');
      toast.querySelector('.toast-body').textContent = "Listeye eklendi.";
    } else {
      toast.classList.remove('success');
      toast.classList.add('error');
      toast.querySelector('.toast-body').textContent = "Listeye boş ekleme yapamazsınız!";
    }
    $(toast).toast('show');
  }
  
  // Liste öğesine tıklama olayını ekleyerek checked sınıfı eklemek
  document.getElementById("list").addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
    }
  });
  
  // Close butonunu liste öğelerinden kaldırmak için
  document.getElementById("list").addEventListener("click", function(e) {
    if (e.target.classList.contains("close")) {
      // "close" butonuna tıklanırsa, bu butonun bulunduğu li öğesini sileriz
      let li = e.target.parentElement;
      li.remove();
    }
  });
  