import TradingPlanetApp from './TradingPlanetApp'


class ServiceInterface {

  _serviceName: any
  _dependsOn: any
  _spyHandlers: any
  app: any


  // _constructor for aggregation
  _constructor() {
    // service name, within it will be stored in this.app.services
    this._serviceName     = null
    this._dependsOn       = null
    this._spyHandlers     = []
  }

  constructor() {
    this._constructor()
  }

  _attachTradingPlanetApp(app) {
    TradingPlanetApp.required(app)

    this.app = app
  }

  _waitRelationsResolve() {
    TradingPlanetApp.required(this.app)

    if (this._dependsOn && this._dependsOn.length) {
      const dependsOnMap = {}

      this._dependsOn.forEach((Service) => {
        dependsOnMap[Service.name] = {
          initialized: false,
        }

        this.app.services[Service.name]._addWaitRelationHandler(() => {
          dependsOnMap[Service.name].initialized = true

          const areAllExpectsInitialized = Object.keys(dependsOnMap).every((serviceName) => (
            dependsOnMap[serviceName].initialized
          ))

          if (areAllExpectsInitialized) {
            this.initService()
          }
        })
      })
    }
  }

  _addWaitRelationHandler(handler) {
    this._spyHandlers.push(handler)
  }

  _tryInitService() {
    // init service on TradingPlanetApp mounting
    TradingPlanetApp.required(this.app)

    if (!this._dependsOn || !this._dependsOn.length) {
      this.initService()
      this._spyHandlers.forEach((handler) => handler())
      this._spyHandlers = []
    }
  }

  initService() {
    // init service on TradingPlanetApp mounting
  }
}


export default ServiceInterface
