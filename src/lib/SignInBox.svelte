<div class="box fx-column margin-auto">
  <div class="entete fx ">
    <div class="margin-auto">User Connection</div>
  </div>
	<slot style="display:block"></slot>
</div>

<style>
	.box {
		width: 500px;
    min-height: 500px;
    margin: auto;
		border: 1px solid #aaa;
		border-radius: 2px;
		box-shadow: 2px 2px 8px rgba(0,0,0,0.1);
		margin: 0 0 1em 0;
    display: flex;
    margin: auto;
	}

  .entete {
    height: 30px;
    background-color: darkslateblue;
    color: whitesmoke;
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif
  }
</style>