const connectBtn = document.getElementById("connectBtn");
const accountBox = document.getElementById("accountBox");

// Hàm kết nối MetaMask
async function connectWallet() {
  if (typeof window.ethereum === "undefined") {
    alert("Bạn cần cài MetaMask để sử dụng chức năng này!");
    return;
  }

  try {
    // Request MetaMask account
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts"
    });

    const account = accounts[0];
    console.log("Connected:", account);

    // Hiển thị địa chỉ ví lên HTML
    accountBox.textContent = "Địa chỉ ví: " + account;
    accountBox.classList.remove("hidden");

    connectBtn.textContent = "Đã kết nối";

  } catch (err) {
    console.error("Lỗi khi kết nối:", err);
  }
}

// Gán sự kiện click
connectBtn.addEventListener("click", connectWallet);
