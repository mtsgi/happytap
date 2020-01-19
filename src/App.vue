<template>
  <div id="app">
    <header></header>
    <aside>Click to Start</aside>
    <main>
        <div id="p1">
            <h3>0</h3>
        </div>
        <div id="p2">
            <h3>0</h3>
        </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
main {
    display: flex;
}

main > div {
    box-sizing: border-box;
    width: 50%;
    height: 100vh;
    text-align: center;
    font-size: 20px;    
}

header {
    position: absolute;
    top: 20px;
    background: rgba(0, 0, 0, .5);
    color: #ffffff;
    width: 60px;
    left: calc(50% - 30px);
    text-align: center;
    font-size: 30px;
    border-radius: 6px;
}

aside {
    position: absolute;
    bottom: 30px;
    left: 25vw;
    width: 50vw;
    text-align: center;
    font-size: 20px;
    background: #ffffff;
    margin: 0 auto;
    padding: 10px 0;
    border-radius: 5px;
    box-shadow: 0 2px 7px 0 rgba(0, 0, 0, .2);
}

aside:hover {
    background: #f0f0f0;
}

#p1 {
    background: rgba(255, 195, 213, .5);
}

#p1:active {
    background: rgba(255, 195, 213, 1);
}

#p2 {
    background: rgba(186, 230, 255, .5);
}

#p2:active {
    background: rgba(186, 230, 255, 1);
}
</style>
