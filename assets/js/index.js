let screen = document.getElementById('screen')

screen.addEventListener('click',function(){
    screen.classList.toggle('toggleScreen')
})



// ----------------------
$(document).ready(
    ()=>$('#isLoading i').fadeOut(4000,()=>$('#isLoading').fadeOut(1000,()=>$('#about .col-md-6').animate({'display':'block' , 'opacity':'1' },2000 ,function(){
        $('#screen').animate({'opacity':'1'},2000 ,()=>{
            $('#isLoading').remove()
            $('body').css('overflow', 'auto')
        }
        )})))
)