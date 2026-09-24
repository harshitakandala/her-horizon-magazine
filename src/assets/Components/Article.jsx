import { useParams } from "react-router-dom";
import './Article.css'
import articleimg from '../ramabai.jpg'

const Article = () => {
  const { id } = useParams();

  return (
    <div className="articlecontainer">
      <h1 className="article-title">The Forgotten Sheroes of India: <br />Pandita Ramabai</h1>
      <h3 className="author">By Praneeta Kandala · Her Horizon</h3>
      <img src={articleimg} alt="Pandita Ramabai" className='article-image' />
      <h3><i>“If education were given to women, it would be impossible for men to keep them under their complete subjection.”</i></h3>
      <p className="para1">Pandita Ramabai Sarasvati (1858-1922) was 30 years old when she said that — standing in front of the International Council of Women in Washington DC, in 1888.</p>
      <p>She was married at 22, widowed at 23, and left with an infant. Society said a widow's life was over. She built a school instead. But long before she stood in that room in Washington, Ramabai was just a girl who had been told she wasn't allowed to learn. </p>
      <p>Born as Ramabai Dongre on April 23rd 1858, she was a part of a high-caste Brahmin family from Gangamul. Her father, a Sanskrit scholar, defied the norms and taught her Sanskrit at home. Even her mother—taught by her husband—began teaching Sanskrit to all genders. This, however, was opposed by several orthodox Brahmins that the family was often compelled to move to desolate places. By sixteen, the famine had taken her parents. She and her brother were left alone in a country where the ground was too dry to grow anything but grief. And then the teenage girl did the unthinkable: she and her brother walked across India, reciting sacred texts that women had been forbidden to even touch — her voice carrying through villages where a woman's voice had rarely been heard speaking them. Yet the more they wandered, the less they believed in the very texts they carried. They grew doubtful of the truth and value of Hindu beliefs and practices, and began seeking meaning outside religion, making friends beyond religious circles. </p>
      <p>Ramabai's fame spread as far as Calcutta, where the pandits invited her to speak. After a well-received speech, the scholars of the University tested her. Her success earned her the titles of Pandita, a female pandit (the first ever woman to earn it) and Sarasvati, the goddess of learning. She married Bengali lawyer Bipin Behari Medhvi in 1880 — an inter-caste union that scandalised her society — but he died of cholera two years later, leaving her a widow at 23 with a daughter, Manorama. Instead of retreating, she founded the Arya Mahila Samaj in Pune to push for women's education and an end to child marriage. </p>
      <p>She didn't stop at one school. In 1889 she opened Sharada Sadan, a home for child widows in Bombay, and later founded the Mukti Mission near Pune — a refuge that would eventually shelter thousands of widows, orphans, and famine victims. Ramabai was a scholar, a widow, a single mother, a reformer, and a founder — all at once. When the world told her she couldn't, she didn't argue; she built. She turned every rejection into a door for the women who came after her. That is what Empowered Women, Empower Women truly means — and she lived it more than a century before we gave it a name. </p>
    </div>
  );
};

export default Article;