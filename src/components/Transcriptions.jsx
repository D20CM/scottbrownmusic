import css from "./transcriptions.module.css";
import sheetmusicpic from "../assets/images/dayne-topkin-cB10K2ugb-4-unsplash (2460 x 1640).jpg";
import AustralianTune1 from "../assets/transcriptions/Australian Tune_0001.png";
import AustralianTune2 from "../assets/transcriptions/Australian Tune_0002.png";
import AustralianTune3 from "../assets/transcriptions/Australian Tune_0003.png";
import NoTimeLikeThePast1 from "../assets/transcriptions/No Time Like The Past_0001.png";
import NoTimeLikeThePast2 from "../assets/transcriptions/No Time Like The Past_0002.png";

function Transcriptions() {
  return (
    <section className={css.transcriptions}>
      <img
        src={sheetmusicpic}
        alt="a picture of a pair of glasses and pen on top of a stack of handwritten sheet music"
        className={css.sheetmusicpic}
      ></img>
      <div className={css.transcriptionsContent}>
        <h2>Transcriptions</h2>
        <h3>Australian Tune</h3>
        <p>
          I’ve added a transcription of another of my compositions – a short
          tune in 6/8 time which floats between G major and D major tonalities.
          It’s called Australian Tune as it was written while I was backpacking
          in Australia several years ago. It’s in an open Gmaj7 tuning – low to
          high it’s DGDF#BD. You can find a video of me playing it here. I hope
          you enjoy the melody and have fun exploring some of the chord shapes,
          let me know how you get on. You can find more transcriptions below.
        </p>
        <img src={AustralianTune1} className={css.transcriptionsheet}></img>
        <img src={AustralianTune2} className={css.transcriptionsheet}></img>
        <img src={AustralianTune3} className={css.transcriptionsheet}></img>
        <h3>No Time Like The Past</h3>
        <p>
          Below is a transcription I made of one of my solo acoustic guitar
          compositions – it’s a pretty little tune with some tapped harmonics
          and palm muted bass string work to add interest to the texture. You
          can watch an old video of me playing this here. I’m hoping to add a
          few more of these transcriptions as soon as time allows. Hope you
          enjoy this one!
        </p>
        <img src={NoTimeLikeThePast1} className={css.transcriptionsheet}></img>
        <img src={NoTimeLikeThePast2} className={css.transcriptionsheet}></img>
      </div>
    </section>
  );
}

export default Transcriptions;
