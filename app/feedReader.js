//define your rss feed url here
const rssUrl = "http://api.20min.ch/rss/view/";

const addFeedsToSite = function(category, containerName) {
  const container = $("#" + containerName);

  $("#loadingIndicator").text("Loading...");

  $.get(rssUrl + category + "?q=" + +new Date(), function(data) {
    container.empty();
    $(data)
      .find("item")
      .each(function(idx) {
        const el = $(this);
        const item_title = el.find("title").text();
        const item_description = el.find("description").text();
        const item_pubDate = el.find("pubDate").text();
        const item_Image = el.find("enclosure")[0].attributes["url"].value;
        AddItem(
          container,
          item_title,
          item_description,
          item_pubDate,
          item_Image
        );
      });

    $("#loadingIndicator").text("Zuletzt aktualisiert: " + data.lastModified);
  }).fail(function() {
    $("#loadingIndicator").text("Error refreshing news");
  });
};

function AddItem(
  container,
  item_title,
  item_description,
  item_pubDate,
  item_ImageUrl
) {
  container.append(`<li class="list-group-item">
                <div class="title">${item_title}</div>
                <img src="${item_ImageUrl}" alt="${item_title}">
                <div class="description">${item_description}</div>
                <div class="pubDate">${item_pubDate}</div>
            </li>`);
}
