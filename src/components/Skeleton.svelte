<style>
  .skeleton-loading-block {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f2f2f2;
    color: grey;
    border-radius: 4px;
    height: 60px;
    width: 100%;
    margin-top: 16px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); 
    animation: skeleton-loading 1s infinite alternate;
  }

  @keyframes skeleton-loading {
    0% {
      opacity: 0.6;
    }

    100% {
      opacity: 1;
    }
  }
</style>

<div class="skeleton-loading-block">Fetching from Amazon.com</div>