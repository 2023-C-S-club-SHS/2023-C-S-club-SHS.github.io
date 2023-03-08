import qrcode
from PIL import Image
from qrcode.image.styledpil import StyledPilImage
from qrcode.image.styles import moduledrawers, colormasks


thumb_img_path = 'resources/clublogo_background.png'
thumb_img = Image.open(thumb_img_path)

qr = qrcode.QRCode(error_correction=qrcode.constants.ERROR_CORRECT_H)
qr.add_data('https://2023shscsclub.github.io/')
qr.make()

qr_info = qr.make_image(image_factory=StyledPilImage,
                        module_drawer=moduledrawers.RoundedModuleDrawer(),
                        color_mask=colormasks.ImageColorMask(color_mask_image=thumb_img)).convert('RGB')

qr_info.save('qrcode.png')
