import * as uuid from 'uuid';
import * as path from 'path';

class FileService {
  saveFile(file) {
    console.log(file);
    try {
      const ext = file.name.slice(-4);
      const name = file.name.slice(0, -3);
      const fileName = name + uuid.v4() + ext;
      const filePath = path.resolve('static', fileName);

      file.mv(filePath);
      return fileName;
    } catch (e) {
      console.log(e);
    }
  }
}

export default new FileService();
