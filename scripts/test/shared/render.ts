import * as fs from 'fs';
import { ProjectReflection, RendererEvent, UrlMapping } from 'typedoc';

export async function render(
  this: any,
  project: ProjectReflection,
  outputDirectory: string
): Promise<void> {
  if (!this.prepareTheme()) {
    return;
  }
  const output = new RendererEvent(
    RendererEvent.BEGIN,
    outputDirectory,
    project
  );
  output.urls = this.theme!.getUrls(project);

  this.trigger(output);

  await Promise.all(this.preRenderAsyncJobs.map((job:any) => job(output)));
  this.preRenderAsyncJobs = [];

  if (!output.isDefaultPrevented) {
    output.urls?.forEach((mapping: UrlMapping) => {
      this.renderDocument(...output.createPageEvent(mapping));
    });

    await Promise.all(this.postRenderAsyncJobs.map((job:any) => job(output)));
    this.postRenderAsyncJobs = [];

    this.trigger(RendererEvent.END, output);
  }
}

export function removeDir(path: string) {
  if (fs.existsSync(path)) {
    const files = fs.readdirSync(path);
    if (files.length > 0) {
      files.forEach(function(filename) {
        if (fs.statSync(path + '/' + filename).isDirectory()) {
          removeDir(path + '/' + filename);
        } else {
          fs.unlinkSync(path + '/' + filename);
        }
      });
      fs.rmdirSync(path);
    } else {
      fs.rmdirSync(path);
    }
  }
}
