<template>
  <div class="body">
  <div class="top-image-container">
    
    <h1></h1>
     <img src="@/assets/blue3.png" alt="Description of the image" />
    
  </div>
  <hr />
  <div class="title">ПЕРСОНАЛ</div>
  <hr />
    <div class="staff" ref="staff">
    <!-- Додано новий слайд -->
    <div class="slick-track" @wheel.prevent="handleWheel"></div>
     <div class="slick-track">
     
      

      
      <div class="slider__item slick-slide" tabindex="-1" role="tabpanel" aria-hidden="true">
        <div class="slider__item-content">
          <div class="slider__item-photo">
            <div class="slider__item-head">
              <div class="dots"></div>
              <img src="@/assets/man1.png" alt="1">
              <div class="dots"></div>
            </div>
            <a target="_blank" href="https://mail.google.com/mail/u/0/#inbox?compose=CrpPbDzHMmGkPBjGHMQftmbBCDHqSbZmXCRlHGBDlXZSCGCjFjbdJczdKGmnrlgBVpBRDhcdRJdXkztxpKvV" tabindex="-1">vasyl.kepych@uzhnu.edu.ua</a>
          </div>
          <div class="slider__item-text">
            <h2 class="name">Кепич Василь <br> Георгійович</h2>
            <div class="position">
              Директор студмістечка
            </div>
            
            <a class="more" href="https://www.uzhnu.edu.ua/uk/cat/abiturient-dormitories/staff">Дізнатися більше...</a>
          </div>
        </div>
      </div>


      <div class="slider__item slick-slide" tabindex="-1" role="tabpanel" aria-hidden="true">
        <div class="slider__item-content">
          <div class="slider__item-photo">
            <div class="slider__item-head">
              <div class="dots"></div>
              <img src="@/assets/man1.png" alt="2">
              <div class="dots"></div>
            </div>
            <a target="_blank" href="https://mail.google.com/mail/u/0/#inbox?compose=CrpPbDzHMmGkPBjGHMQftmbBCDHqSbZmXCRlHGBDlXZSCGCjFjbdJczdKGmnrlgBVpBRDhcdRJdXkztxpKvV" tabindex="-1">email@gmail.com</a>
          </div>
          <div class="slider__item-text">
            <h2 class="name">Некачайло Валерій <br> Вікторович</h2>
            <div class="position">
              Заступник директора <br> студмістечка
            </div>
            
            <a class="more" href="https://www.uzhnu.edu.ua/uk/cat/abiturient-dormitories/staff">Дізнатися більше...</a>
          </div>
        </div>
      </div>


      <div class="slider__item slick-slide" tabindex="-1" role="tabpanel" aria-hidden="true">
        <div class="slider__item-content">
          <div class="slider__item-photo">
            <div class="slider__item-head">
              <div class="dots"></div>
              <img src="@/assets/man1.png" alt="3">
              <div class="dots"></div>
            </div>
            <a target="_blank" href="https://mail.google.com/mail/u/0/#inbox" tabindex="-1">email@gmail.com</a>
          </div>
          <div class="slider__item-text">
            <h2 class="name">Бурдюх Іван <br> Іванович </h2>
            <div class="position">
              Заступник директора <br> по експлуатації
            </div>
            
            <a class="more" href="https://www.uzhnu.edu.ua/uk/cat/abiturient-dormitories/staff">Дізнатися більше...</a>
          </div>
        </div>
      </div>



      <div class="slider__item slick-slide" tabindex="-1" role="tabpanel" aria-hidden="true">
        <div class="slider__item-content">
          <div class="slider__item-photo">
            <div class="slider__item-head">
              <div class="dots"></div>
              <img src="@/assets/women.png" alt="4">
              <div class="dots"></div>
            </div>
            <a target="_blank" href="https://mail.google.com/mail/u/0/#inbox?compose=CrpPbDzHMmGkPBjGHMQftmbBCDHqSbZmXCRlHGBDlXZSCGCjFjbdJczdKGmnrlgBVpBRDhcdRJdXkztxpKvV" tabindex="-1">email@gmail.com</a>
          </div>
          <div class="slider__item-text">
            <h2 class="name">Білей Світлана <br> Петрівна</h2>
            <div class="position">
              Комендант гуртожитку №1
            </div>
            <a class="more" href="https://www.uzhnu.edu.ua/uk/cat/abiturient-dormitories/staff">Дізнатися більше...</a>
          </div>
        </div>
      </div>


      <div class="slider__item slick-slide" tabindex="-1" role="tabpanel" aria-hidden="true">
        <div class="slider__item-content">
          <div class="slider__item-photo">
            <div class="slider__item-head">
              <div class="dots"></div>
              <img src="@/assets/women.png" alt="5">
              <div class="dots"></div>
            </div>
            <a target="_blank" href="https://mail.google.com/mail/u/0/#inbox?compose=CrpPbDzHMmGkPBjGHMQftmbBCDHqSbZmXCRlHGBDlXZSCGCjFjbdJczdKGmnrlgBVpBRDhcdRJdXkztxpKvV" tabindex="-1">email@gmail.com</a>
          </div>
          <div class="slider__item-text">
            <h2 class="name">Бецала Марія <br> Іванівна</h2>
            <div class="position">
              Комендант гуртожитку №2
            </div>
            <a class="more" href="https://www.uzhnu.edu.ua/uk/cat/abiturient-dormitories/staff">Дізнатися більше...</a>
          </div>
        </div>
      </div>


      <div class="slider__item slick-slide" tabindex="-1" role="tabpanel" aria-hidden="true">
        <div class="slider__item-content">
          <div class="slider__item-photo">
            <div class="slider__item-head">
              <div class="dots"></div>
              <img src="@/assets/women.png" alt="6">
              <div class="dots"></div>
            </div>
            <a target="_blank" href="https://mail.google.com/mail/u/0/#inbox?compose=CrpPbDzHMmGkPBjGHMQftmbBCDHqSbZmXCRlHGBDlXZSCGCjFjbdJczdKGmnrlgBVpBRDhcdRJdXkztxpKvV" tabindex="-1">email@gmail.com</a>
          </div>
          <div class="slider__item-text">
            <h2 class="name">Мішура Тамара <br> Корніївна</h2>
            <div class="position">
              Комендант гуртожитку №3
            </div>
            <a class="more" href="https://www.uzhnu.edu.ua/uk/cat/abiturient-dormitories/staff">Дізнатися більше...</a>
          </div>
        </div>
      </div>


      <div class="slider__item slick-slide" tabindex="-1" role="tabpanel" aria-hidden="true">
        <div class="slider__item-content">
          <div class="slider__item-photo">
            <div class="slider__item-head">
              <div class="dots"></div>
              <img src="@/assets/women.png" alt="7">
              <div class="dots"></div>
            </div>
            <a target="_blank" href="https://mail.google.com/mail/u/0/#inbox?compose=CrpPbDzHMmGkPBjGHMQftmbBCDHqSbZmXCRlHGBDlXZSCGCjFjbdJczdKGmnrlgBVpBRDhcdRJdXkztxpKvV" tabindex="-1">email@gmail.com</a>
          </div>
          <div class="slider__item-text">
            <h2 class="name">Трохимець Ірина <br> Михайлівна</h2>
            <div class="position">
              Завідувач гуртожитку №4
            </div>
            <a class="more" href="https://www.uzhnu.edu.ua/uk/cat/abiturient-dormitories/staff">Дізнатися більше...</a>
          </div>
        </div>
      </div>


      <div class="slider__item slick-slide" tabindex="-1" role="tabpanel" aria-hidden="true">
        <div class="slider__item-content">
          <div class="slider__item-photo">
            <div class="slider__item-head">
              <div class="dots"></div>
              <img src="@/assets/man1.png" alt="8">
              <div class="dots"></div>
            </div>
            <a target="_blank" href="https://mail.google.com/mail/u/0/#inbox?compose=CrpPbDzHMmGkPBjGHMQftmbBCDHqSbZmXCRlHGBDlXZSCGCjFjbdJczdKGmnrlgBVpBRDhcdRJdXkztxpKvV" tabindex="-1">email@gmail.com</a>
          </div>
          <div class="slider__item-text">
            <h2 class="name">Бобик Юрій <br> Юрійович</h2>
            <div class="position">
              Комендант гуртожитку №4
            </div>
            <a class="more" href="https://www.uzhnu.edu.ua/uk/cat/abiturient-dormitories/staff">Дізнатися більше...</a>
          </div>
        </div>
      </div>


      <div class="slider__item slick-slide" tabindex="-1" role="tabpanel" aria-hidden="true">
        <div class="slider__item-content">
          <div class="slider__item-photo">
            <div class="slider__item-head">
              <div class="dots"></div>
              <img src="@/assets/women.png" alt="9">
              <div class="dots"></div>
            </div>
            <a target="_blank" href="https://mail.google.com/mail/u/0/#inbox?compose=CrpPbDzHMmGkPBjGHMQftmbBCDHqSbZmXCRlHGBDlXZSCGCjFjbdJczdKGmnrlgBVpBRDhcdRJdXkztxpKvV" tabindex="-1">email@gmail.com</a>
          </div>
          <div class="slider__item-text">
            <h2 class="name">Танцюра Галина <br> Григорівна</h2>
            <div class="position">
              Комендант гуртожитку №4
            </div>
            
            <a class="more" href="https://www.uzhnu.edu.ua/uk/cat/abiturient-dormitories/staff">Дізнатися більше...</a>
          </div>
        </div>
      </div>

      <div class="slider__item slick-slide" tabindex="-1" role="tabpanel" aria-hidden="true">
        <div class="slider__item-content">
          <div class="slider__item-photo">
            <div class="slider__item-head">
              <div class="dots"></div>
              <img src="@/assets/women.png" alt="10">
              <div class="dots"></div>
            </div>
          </div>
          <a target="_blank" href="https://mail.google.com/mail/u/0/#inbox?compose=CrpPbDzHMmGkPBjGHMQftmbBCDHqSbZmXCRlHGBDlXZSCGCjFjbdJczdKGmnrlgBVpBRDhcdRJdXkztxpKvV" tabindex="-1">email@gmail.com</a>
          <div class="slider__item-text">
            <h2 class="name">БУРИШИН-ОЛІЙНИК Тетяна <br> Іванівна</h2>
            <div class="position">
              Комендант гуртожитку №5
            </div>
            
            <a class="more" href="https://www.uzhnu.edu.ua/uk/cat/abiturient-dormitories/staff">Дізнатися більше...</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <hr />
  <div class="footer">
      <div class="container">
        <p>&copy; 2023 Ваш сайт. Усі права захищені.</p>

        <!-- Додатковий вміст футера, якщо потрібно -->
        <ul>
          <li><a href="https://www.uzhnu.edu.ua/uk/cat/general_pages/support">Політика конфіденційності</a></li>
          <li><a href="https://www.uzhnu.edu.ua/uk/cat/general_pages/terms_of_use">Умови використання</a></li>
        </ul>
      </div>
        
        <div class="column">
          <p><strong>Ректорат:</strong></p>
          <p>Адреса: 88000, <br> Україна, Закарпатська обл., <br>  м. Ужгород, пл. Народна, 3</p>
        </div>
        <div class="column1">
          <p>Телефон: +380312613321</p>
          <p>Факс: +380312613396</p>
          <p>E-mail: official@uzhnu.edu.ua</p>
        </div>
   
    </div>
  
  </div>
</template>

<script>
export default {
  data() {
  return {
    scrollPosition: 0,
  };
},
methods: {
  handleWheel(event) {
    const delta = event.deltaY || event.detail || event.wheelDelta;

    // Scroll both horizontally and vertically
    this.$refs.staff.scrollLeft += delta > 0 ? 100 : -100;
    window.scrollBy(0, delta);

    // Prevent default to stop the normal page scroll for both directions
    event.preventDefault();
  },
},



};
</script>

<style scoped>

.body {
  height: 100vh; /* 100% of the viewport height */
  margin: 0; /* Remove default body margin */
  overflow-y: auto;
  background-image: url('@/assets/blue.png');
  
}

.title{
  color:#fff;
  margin-top: 20px;
  font-size: 54px;
}
.logo {
  width: 70px; 
  height: 50px; 
  background-image: url("@/assets/лого1.png"); 
  background-size: contain;
  background-repeat: no-repeat;
  position: absolute;
  top: 20px; 
  left: 50px; 
}
.overlay-text {
  font-family: "Helious", sans-serif;
  color: rgb(255, 255, 255);
  font-size: 15px;
  font-weight: l;
  position: fixed;
  top: 26px;
  left: 104px;
  text-align: left;
}
.staff {
  overflow-x: auto; 
  color: rgb(255, 255, 255);
  white-space: nowrap;
  display: flex;
  justify-content: center; 
  align-items: center; 
  height: 400px; 
  
}

.slick-track {
  display: inline-flex; 
  margin-left:750px; /* Add left margin to the first element */
  margin-right: 0px;
 
}

.slick-slide {
  display: inline-block; 
}

/* Додані стилі для всіх слайдів, щоб вони вміщувалися в рядок горизонтально */
.slider__item {
  width: 300px; 
  margin-left: 20px; 
  
}
.slider-container {
  white-space: nowrap;
  height: 100%;
  display: flex;
  align-items: center;
}
.slider__item-photo {
  max-width: 100%; 
  max-height: 100%; 
}

/*  якщо  фіксований розмір для зображення */
.slider__item-photo img {
  width: 100px; 
  height: 100px; 
}
.slick-container {
  
  white-space: nowrap;
  
}
.top-image-container img {
  width: 100%;
  height: 300px;
  object-fit: cover;
  top:0px; 
}
.staff::-webkit-scrollbar {
  display: none; 
}
.footer {
  background-color: #10279B;
  color: #fff;
  padding: 40px 0;
  text-align: center;
  margin-top:180px;
  display: flex;
  justify-content: space-between;
}

.footer a {
  color: #fff;
  text-decoration: none;
  margin-right: 0; 
  top:0px;
}
.main-container {
  height: 100vh; /* 100% of the viewport height */
  overflow-y: auto; /* Enable vertical scrolling for the entire page */
}

.contact-info {
  text-align: right; /* Align the content to the right */
  left:10px;
  
}
.column {
  display: inline-block;
  margin-left: auto;
  top:0px;
  margin-left: 900px; 
  text-align: right;
  
}
.column1 {
  display: inline-block;
  /* Set the width of each column */
  margin-left: auto;
  top:0px;
  margin-right: 20px; 
  text-align: left;
  
}
.container{
  top:0px;
  margin-left: 40px; 
  text-align: left;
}
.slider__item-text a {
    color: #fff;
    text-decoration: none;
    
}
.slider__item-text a{
  color: #fff;
  text-decoration: none;
}
a{
  color: #fff;
  text-decoration: none;
}
</style>