import io
import qrcode
from flask import Flask, request, send_file, render_template

app = Flask(__name__)


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/qrcode", methods=["GET", "POST"])
def generate_qr_code():
    if request.method == "POST":
        url = request.form["url"]
    else:
        url = request.args.get("url")

    if url:
        qr = qrcode.QRCode(version=1, box_size=10, border=5)
        qr.add_data(url)
        qr.make(fit=True)
        img = qr.make_image(fill_color="black", back_color="white")
        img_io = io.BytesIO()
        img.save(img_io, "PNG")
        img_io.seek(0)
        return send_file(
            img_io,
            mimetype="image/png",
            as_attachment=True,
            attachment_filename="qrcode.png",
        )
    else:
        return "Please provide a URL in the 'url' parameter or the form."


if __name__ == "__main__":
    app.run()
