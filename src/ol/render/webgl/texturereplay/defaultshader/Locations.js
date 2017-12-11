/**
 * @module ol/render/webgl/texturereplay/defaultshader/Locations
 */
// This file is automatically generated, do not edit
import _ol_ from '../../../../index.js';

/**
 * @constructor
 * @param {WebGLRenderingContext} gl GL.
 * @param {WebGLProgram} program Program.
 * @struct
 */
var _ol_render_webgl_texturereplay_defaultshader_Locations_ = function(gl, program) {

  /**
   * @type {WebGLUniformLocation}
   */
  this.u_projectionMatrix = gl.getUniformLocation(
      program, _ol_.DEBUG_WEBGL ? 'u_projectionMatrix' : 'h');

  /**
   * @type {WebGLUniformLocation}
   */
  this.u_offsetScaleMatrix = gl.getUniformLocation(
      program, _ol_.DEBUG_WEBGL ? 'u_offsetScaleMatrix' : 'i');

  /**
   * @type {WebGLUniformLocation}
   */
  this.u_offsetRotateMatrix = gl.getUniformLocation(
      program, _ol_.DEBUG_WEBGL ? 'u_offsetRotateMatrix' : 'j');

  /**
   * @type {WebGLUniformLocation}
   */
  this.u_opacity = gl.getUniformLocation(
      program, _ol_.DEBUG_WEBGL ? 'u_opacity' : 'k');

  /**
   * @type {WebGLUniformLocation}
   */
  this.u_image = gl.getUniformLocation(
      program, _ol_.DEBUG_WEBGL ? 'u_image' : 'l');

  /**
   * @type {number}
   */
  this.a_position = gl.getAttribLocation(
      program, _ol_.DEBUG_WEBGL ? 'a_position' : 'c');

  /**
   * @type {number}
   */
  this.a_texCoord = gl.getAttribLocation(
      program, _ol_.DEBUG_WEBGL ? 'a_texCoord' : 'd');

  /**
   * @type {number}
   */
  this.a_offsets = gl.getAttribLocation(
      program, _ol_.DEBUG_WEBGL ? 'a_offsets' : 'e');

  /**
   * @type {number}
   */
  this.a_opacity = gl.getAttribLocation(
      program, _ol_.DEBUG_WEBGL ? 'a_opacity' : 'f');

  /**
   * @type {number}
   */
  this.a_rotateWithView = gl.getAttribLocation(
      program, _ol_.DEBUG_WEBGL ? 'a_rotateWithView' : 'g');
};

export default _ol_render_webgl_texturereplay_defaultshader_Locations_;
