pipeline {
  agent any
  stages {
    stage('build') {
      steps {
        sh 'docker build -t node-jest:$BUILD_NUMBER .'
      }
    }

    stage('create container') {
      steps {
        sh 'docker run --name node-jest-$BUILD_NUMBER -d --rm node-jest:$BUILD_NUMBER'
      }
    }

    stage('test') {
      steps {
        sh 'docker exec node-jest-$BUILD_NUMBER npm test'
      }
    }

    stage('deploy') {
      steps {
        sh 'echo deploy'
      }
    }

  }
}