import qrcode
from PIL import Image
from qrcode.image.styledpil import StyledPilImage
from qrcode.image.styles import moduledrawers, colormasks


thumb_img_path = 'resources/clublogo_background.png'
thumb_img = Image.open(thumb_img_path)
thumb_img.thumbnail((100, 100))

qr = qrcode.QRCode(error_correction=qrcode.constants.ERROR_CORRECT_H)
qr.add_data('https://2023shscsclub.github.io/')
qr.make()

qr_info = qr.make_image(image_factory=StyledPilImage,
                        module_drawer=moduledrawers.CircleModuleDrawer(),
                        color_mask=colormasks.RadialGradiantColorMask(
                            edge_color=(104,221,168),
                            center_color=(222,62,102))).convert('RGB')
pos = ((qr_info.size[0]-thumb_img.size[0]) // 2, (qr_info.size[1]-thumb_img.size[1])//2)
qr_info.paste(thumb_img, pos)

qr_info.save('qrcode.png')
