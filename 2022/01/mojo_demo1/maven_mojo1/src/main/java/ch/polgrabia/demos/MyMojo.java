package ch.polgrabia.demos;

import org.apache.maven.plugin.AbstractMojo;
import org.apache.maven.plugin.MojoExecutionException;
import org.apache.maven.plugin.logging.Log;
import org.apache.maven.plugins.annotations.LifecyclePhase;
import org.apache.maven.plugins.annotations.Mojo;
import org.apache.maven.plugins.annotations.Parameter;
import org.apache.maven.project.MavenProject;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;

@Mojo(name = "my-mojo", defaultPhase = LifecyclePhase.COMPILE)
public class MyMojo
        extends AbstractMojo {
    private final Log logger = getLog();

    @Parameter(property = "outputDirectory", defaultValue = "target")
    private File outputDirectory;

    @Parameter(defaultValue = "${project}", required = true, readonly = true)
    private MavenProject project;

    public void execute()
            throws MojoExecutionException {

        logger.info("Starting execution...");
        logger.info(String.format("My-mojo plugin running on %s:%s:%s",
                project.getGroupId(), project.getArtifactId(), project.getVersion()));
        File f = outputDirectory;

        if (!f.exists()) {
            if (!f.mkdirs()) {
                throw new MojoExecutionException("Failed to create directory: " + f.getAbsolutePath());
            }
        }

        File touch = new File(f, "touch.txt");

        FileWriter w = null;
        try {
            w = new FileWriter(touch);

            w.write("touch.txt");
        } catch (IOException e) {
            throw new MojoExecutionException("Error creating file " + touch, e);
        } finally {
            if (w != null) {
                try {
                    w.close();
                } catch (IOException e) {
                    logger.error("I couldn't close it the file", e);
                }
            }
            logger.info("Ending execution...");
        }
    }
}
