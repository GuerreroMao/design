if('serviceWorker' in navigator){
    navigator.serviceWorker.egister('sw.js')
    .then(reg=> console.log('Registro del SW exitoso', reg)).
    catch(err=>console.warn("Error al tratar de registrar el SW",err))

}