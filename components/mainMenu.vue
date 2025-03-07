<template>
  <div class="container">
    <div class="row">
      <NuxtLink class="button" to="/marketPrice">
        <img src="../public/icons/iconDashboard/Price LOGO.svg" alt="Market Prices" />
        <p>Market Prices</p>
      </NuxtLink>
      <div class="button">
        <img src="../public/icons/iconDashboard/Alert LOGO.svg" alt="Alerts" />
        <p>Alerts</p>
      </div>
    </div>

    <div class="row highlight">
      <div class="button large">
        <NuxtLink to="/main-exchange">
          <img src="../public/icons/iconDashboard/Group 13.svg" alt="Exchange" />
          <p>Exchange</p>
        </NuxtLink>
      </div>
    </div>

    <div class="row">
      <div class="button">
        <img src="../public/icons/iconDashboard/Wallet LOGO.svg" alt="My Accounts" />
        <p>My Accounts</p>
      </div>
      <div class="button">
        <img src="../public/icons/iconDashboard/Setting LOGO.svg" alt="Settings" />
        <p>Settings</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  width: 350px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  border-radius: 10px;
}

.row {
  display: flex;
  justify-content: space-between;
  gap: 10px;
}

.button {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  background: #404040;
  color: #fff;
  border-radius: 10px;
  padding: 10px;
  cursor: pointer;
  transition: transform 0.3s ease;
  text-align: center;

  img {
    width: 40px;
    height: 40px;
    margin-bottom: 5px;
  }

  p {
    font-size: 14px;
    margin: 0;
  }

  &:hover {
    transform: scale(1.05);
  }
}

.highlight .button.large {
  background: #f5c22b;
  color: #000;
  height: 100px;
  flex: 1 1 100%;
}

.highlight .button.large img {
  width: 50px;
  height: 50px;
}

.button.large:hover {
  transform: scale(1.05);
}
</style>
