<script>
  // slide array to loop through
const slideArr = ["Mohammad Salah", "Virgil Van Dijk", "Andy Robertson", "Allison Becker", "Erling Haaland", "Marcus Rashford", "Kylian Mbappe", "Cristiano Ronaldo", "Lionel Messi", "Kevin De Bryne", "Kaoru Mitoma", "Harry Kane", "Heung-Min Son", "Robert Lewandoski", "Latauro Martinez"];


// current index counter
let currentSlideIndex = 0;


let currentSlideContent = slideArr[0];


// the max length of the array
const maxLength = slideArr.length - 1;

// next function
function nextSlide() {
  if (currentSlideIndex === maxLength) {
    currentSlideIndex = 0;
    currentSlideContent = slideArr[currentSlideIndex];
  } else {
    currentSlideIndex++;
    currentSlideContent = slideArr[currentSlideIndex];
  }
}


// previous function
function prevSlide() {
  if (currentSlideIndex === 0) {
    currentSlideIndex = maxLength;
    currentSlideContent = slideArr[currentSlideIndex]
  } else {
    currentSlideIndex--;
    currentSlideContent = slideArr[currentSlideIndex];
  }
}

</script>

<!--Making of carousel slide-->
<section>
  <h2>{currentSlideIndex}: {currentSlideContent}</h2>
  <div>
    <button on:click={prevSlide} class="rounded-md bg-green-300 px-4 py-2" id="prev-slide">Previous</button>
    <button on:click={nextSlide} class="rounded-md bg-green-300 px-4 py-2" id="next-slide">Next</button>
  </div>
</section>
