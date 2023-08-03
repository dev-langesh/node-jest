pipeline {
  agent any
  stages {
    stage('build') {
      steps {
        sh 'docker build -t node-jest:$BUILD_NUMBER .'
      }
    }

    stage('test') {
      steps {
        sh 'npm test'
      }
    }

    stage('deploy') {
      steps {
        sh 'echo deploy'
      }
    }

  }
}