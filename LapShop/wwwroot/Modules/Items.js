var ClsItems = {
  GetAll: function () {
    Helper.AjaxCallGet(
      'https://localhost:7159/api/Items',
      {},
      'json',
      function (data) {
        $('#ItemPagination').pagination({
          dataSource: data.data,
          pageSize: 20,
          showGoInput: false,
          showGoButton: false,
          callback: function (data, pagination) {
            var htmlData = '';

            for (var i = 0; i < data.length; i++) {
              htmlData += ClsItems.DrawItem(data[i]);
            }

            var d1 = document.getElementById('ItemArea');
            d1.innerHTML = htmlData;
          },
        });
      },
      function () {}
    );
  },
  DrawItem: function (item) {
    return `
      <div class="w-full max-w-sm flex flex-col bg-white border border-gray-200 rounded-lg  img-card">
    <div class="relative overflow-hidden">
        <div class="w-full h-50 bg-contain bg-center bg-no-repeat bg-gray-100 rounded-t-lg"
            style="background: url(/Uploads/Items/${item.imageName}"></div>


    </div>
    <div class="flex flex-col gap-0.5 px-3 py-2">
        <a href="" class="truncate text-primary-900">${item.itemName}</a>
        <div class="flex items-center gap-0.5">
            <iconify-icon icon="solar:star-bold" class="text-amber-400 text-md"></iconify-icon>
            <iconify-icon icon="solar:star-bold" class="text-amber-400 text-md"></iconify-icon>
            <iconify-icon icon="solar:star-bold" class="text-amber-400 text-md"></iconify-icon>
            <iconify-icon icon="solar:star-bold" class="text-amber-400 text-md"></iconify-icon>
            <iconify-icon icon="solar:star-bold" class="text-amber-400 text-md"></iconify-icon>
            <span class="bg-gray-300 text-primary-800 text-xs font-medium px-1.5 rounded-sm ml-1">4.2</span>
        </div>
        <span class="font-semibold text-primary-900">$${item.salesPrice}</span>
        <div
            class="flex w-full items-center justify-center rounded-lg bg-primary-500 hover:bg-primary-600 px-5 py-2.5 text-sm font-medium text-white mt-2">
            <a href="/Order/AddToCart?itemId=${item.itemId}" class="flex
                justify-center items-center text-center gap-1.5">
                <iconify-icon icon="hugeicons:shopping-cart-add-01" class="text-xl"></iconify-icon>
                Add to cart
            </a>
        </div>
    </div>
</div>
    `;
  },
};

document.querySelectorAll('.img-card').forEach((card) => {
  card.addEventListener('mouseover', function () {
    let child = card.querySelector('.card-cta'); // Get only the child inside this card
    child.classList.remove('translate-y-7');
  });
  card.addEventListener('mouseleave', function () {
    setTimeout(() => {
      let child = card.querySelector('.card-cta'); // Get only the child inside this card
      child.classList.add('translate-y-7');
    }, 600);
  });
});
