/**
 * @module ol/render/webgl/polygonreplay/defaultshader/Locations
 */
// This file is automatically generated, do not edit
import _ol_ from '../../../../index.js';

/**
 * @constructor
 * @param {WebGLRenderingContext} gl GL.
 * @param {WebGLProgram} program Program.
 * @struct
 */
var _ol_render_webgl_polygonreplay_defaultshader_Locations_ = function(gl, program) {

  /**
   * @type {WebGLUniformLocation}
   */
  this.u_projectionMatrix = gl.getUniformLocation(
      program, _ol_.DEBUG_WEBGL ? 'u_projectionMatrix' : 'b');

  /**
   * @type {WebGLUniformLocation}
   */
  this.u_offsetScaleMatrix = gl.getUniformLocation(
      program, _ol_.DEBUG_WEBGL ? 'u_offsetScaleMatrix' : 'c');

  /**
   * @type {WebGLUniformLocation}
   */
  this.u_offsetRotateMatrix = gl.getUniformLocation(
      program, _ol_.DEBUG_WEBGL ? 'u_offsetRotateMatrix' : 'd');

  /**
   * @type {WebGLUniformLocation}
   */
  this.u_color = gl.getUniformLocation(
      program, _ol_.DEBUG_WEBGL ? 'u_color' : 'e');

  /**
   * @type {WebGLUniformLocation}
   */
  this.u_opacity = gl.getUniformLocation(
      program, _ol_.DEBUG_WEBGL ? 'u_opacity' : 'f');

  /**
   * @type {number}
   */
  this.a_position = gl.getAttribLocation(
      program, _ol_.DEBUG_WEBGL ? 'a_position' : 'a');
};

export default _ol_render_webgl_polygonreplay_defaultshader_Locations_;
