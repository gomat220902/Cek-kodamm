document.addEventListener('DOMContentLoaded', function() {
    const nameInput = document.getElementById('name');
    
    nameInput.addEventListener('input', function(event) {
        const value = nameInput.value;
        nameInput.value = value.replace(/[^a-zA-Z\s]/g, '');
    });

    document.getElementById('kodamForm').addEventListener('submit', function(event) {
        event.preventDefault();
        
        const name = nameInput.value.trim();
        
        if (name === "") {
            alert("Please enter a valid name.");
            return;
        }

        const kodams = [
            "Ban Tronton",
            "Iga Bakar",
            "Sambal Terasi",
            "Kak Gem",
            "Barbel 5kg", "Nasi Pecel", "Ayam Salto", "Kamus Bahasa Cina", "Teh Gelas", "Rambut Nenek", "Naga Darah", "Naga Putih", "Naga Hitam",
            "Es Teh", "Susu Bendera", "Konghuan", "Barcelona", "Umi Bakwan", "Kacang Ijo", "Beras Sebutir", "Ale-Ale", "Bantal", "Raja Iblis",
            "Cicak Terbang", "Kecoa Alaska", "Kipas Keramat", "Celeng Rabies", "Kursi Gaming", "Raja Naga", "Jerapah Racing", "Semut Api"
        ];
        
        const randomKodam = kodams[Math.floor(Math.random() * kodams.length)];
        
        const resultElement = document.getElementById('result');
        const resultMessageElement = document.getElementById('resultMessage');
        
        resultMessageElement.innerHTML = `<strong>Hai,</strong> ${name}<br><strong>Kodam Anda Adalah:</strong> ${randomKodam}`;
        
        resultElement.classList.remove('hidden');
        resultElement.classList.add('fade-in');
        
        // Mengosongkan input nama setelah submit
        nameInput.value = '';
    });
});