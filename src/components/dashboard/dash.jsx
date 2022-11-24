import "./dashboard.css";

function Dash({user}) {
  return (
    <>
    <ul class="details">
      <li class="topic">Name</li>
      <li>
        <a href="#">AKASh</a>
      </li>
    </ul>
    <ul class="details">
      <li class="topic">AGe</li>
      <li>
        <a href="#">35</a>
      </li>
    </ul>
    <ul class="details">
      <li class="topic">Gender</li>
      <li>
        <a href="#">Male</a>
      </li>
    </ul>
    <ul class="details">
      <li class="topic">Educatoin</li>
      <li>
        <a href="#">02 </a>
      </li>
    </ul>
    <ul class="details">
      <li class="topic">address</li>
      <li>
        <a href="#">bhopal</a>
      </li>
    </ul>
    <ul class="details">
      <li class="topic">ward</li>
      <li>
        <a href="#">null</a>
      </li>
    </ul>
    </>
  );
}
export default Dash;
