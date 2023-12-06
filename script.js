// your code here
function generateURL() {
            // Get input values
            var name = document.getElementById("name").value;
            var year = document.getElementById("year").value;

            // Update the URL
            var urlString = "https://localhost:8080/?name=" + encodeURIComponent(name) + "&year=" + encodeURIComponent(year);
            document.getElementById("url").textContent = urlString;
        }